#!/bin/bash

# recursive_path_converter.sh
# Usage: ./recursive_path_converter.sh <target_directory>
#
# Recursively searches the target directory for all files ending in .html
# and converts absolute root paths (e.g., href="/style.css") to relative
# paths (e.g., href="./style.css") safely in place.

# --- Function to handle the path conversion logic ---
process_file() {
    local FILE="$1"
    
    # Check if the file exists and is a regular file
    if [ ! -f "$FILE" ]; then
        echo "Warning: Skipped '$FILE' (not a regular file)."
        return 0
    fi

    echo "Processing: $FILE"

    # --- FIX: Replaced 'eval' with direct, explicit SED calls to avoid quoting errors ---
    # The issue was the complex quoting inside the 'eval' command. 
    # We now use if/else to explicitly call the correct version of sed.

    # The regex logic: s|(["'"'"'])/([^/>])|\1./\2|g
    # This safely converts /path to ./path without touching // (protocol-relative) or /> (self-closing tag).
    
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS/BSD sed requires an empty string argument to -i
        # The complex quoting '["'"'"']' is the standard way to get a literal single quote inside single quotes.
        sed -i '' -E 's|(["'"'"'])/([^/>])|\1./\2|g' "$FILE"
    else
        # Linux (GNU sed)
        sed -i -E 's|(["'"'"'])/([^/>])|\1./\2|g' "$FILE"
    fi

    if [ $? -eq 0 ]; then
        echo "  - SUCCESS."
    else
        # Note: In some systems, 'sed -i' can return 0 even if no change was made, 
        # but a non-zero exit status indicates a true error (like the one you hit).
        echo "  - ERROR during conversion."
    fi
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

echo "--- Starting Recursive Path Conversion in: $TARGET_DIR ---"

# --- Use find | while read loop for robust function execution ---
# This remains the most robust way to process a list of files with a shell function.
# -print0 and -d $'\0' safely handle filenames containing spaces or special characters.

find "$TARGET_DIR" -type f -name "*.html" -print0 | while IFS= read -r -d $'\0' FILE; do
    process_file "$FILE"
done

echo "--- All files processed. Conversion complete. ---"