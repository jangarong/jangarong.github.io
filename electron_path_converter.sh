#!/bin/bash

# recursive_path_converter.sh
# Usage: ./recursive_path_converter.sh <target_directory>
#
# 1. DELETES all .js files found within any "_next" subdirectory recursively.
# 2. Recursively searches the target directory for all files ending in .html
#    and converts absolute root paths (e.g., href="/style.css") to relative
#    paths (e.g., href="./style.css") safely in place.

# --- Function to handle the path conversion logic ---
process_file() {
    local FILE="$1"
    
    # Check if the file exists and is a regular file
    if [ ! -f "$FILE" ]; then
        echo "Warning: Skipped '$FILE' (not a regular file)."
        return 0
    fi

    echo "Processing HTML paths: $FILE"

    # --- FIX: Replaced 'eval' with direct, explicit SED calls to avoid quoting errors ---
    # The regex logic: s|(["'"'"'])/([^/>])|\1./\2|g
    # This safely converts /path to ./path without touching // (protocol-relative) or /> (self-closing tag).
    
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS/BSD sed requires an empty string argument to -i
        sed -i '' -E 's|(["'"'"'])/([^/>])|\1./\2|g' "$FILE"
    else
        # Linux (GNU sed)
        sed -i -E 's|(["'"'"'])/([^/>])|\1./\2|g' "$FILE"
    fi

    if [ $? -eq 0 ]; then
        echo "  - HTML Path Conversion SUCCESS."
    else
        echo "  - HTML Path Conversion ERROR during conversion."
    fi
}

# --- Function to handle cleanup of .js files in _next folders ---
cleanup_js_files() {
    local TARGET_DIR="$1"
    
    echo ""
    echo "--- Starting Cleanup: Deleting .js files in */_next/ directories ---"
    
    # find command to locate and delete files:
    # 1. Start search in TARGET_DIR.
    # 2. -type f: Look for files.
    # 3. -path "*/_next/*.js": Look for files ending in .js that have "_next" directly preceding them in the path.
    # 4. -print: Prints the path of each file found.
    # 5. -delete: Deletes the file immediately.
    
    local DELETED_FILES=$(find "$TARGET_DIR" -type f -path "*/_next/*.js" -print -delete 2>/dev/null | wc -l)

    if [ "$DELETED_FILES" -gt 0 ]; then
        echo "Successfully deleted $DELETED_FILES .js file(s) from */_next/ folders."
    else
        echo "No .js files found in */_next/ folders to delete."
    fi
    echo "-------------------------------------------------------------------"
    echo ""
}

# --- Main Script Execution ---

if [ "$#" -ne 1 ]; then
    echo "Error: Must provide exactly one target directory path."
    echo "Usage: $0 <target_directory>"
    exit 1
fi

TARGET_DIR="$1"

if [ ! -d "$TARGET_DIR" ]; then
    echo "Error: Directory not found or not a directory: '$TARGET_DIR'."
    exit 1
fi

echo "--- Starting Dual Operation Script in: $TARGET_DIR ---"

# 1. Perform cleanup first
cleanup_js_files "$TARGET_DIR"

# 2. Perform HTML path conversion second
echo "--- Starting Recursive HTML Path Conversion ---"

# Use find | while read loop for robust function execution.
find "$TARGET_DIR" -type f -name "*.html" -print0 | while IFS= read -r -d $'\0' FILE; do
    process_file "$FILE"
done

echo "--- All operations complete. ---"