import { Button } from "@/components/ui/button";
import { FileTextIcon } from "lucide-react";

export default function DownloadMyResume() {
  return (

          <div className="flex flex-col justify-center items-center px-2">
            <div className="text-center mb-4 text-xl font-bold">Want to learn more about my work?</div>
            <div className="text-center mb-8 text-lg">Download my free resume!</div>
            <a href="/resume.pdf">
              <Button className="w-[300px] text-2xl font-bold p-8" >
                <FileTextIcon style={{height: '22px', width: '22px'}} /> Download
              </Button>
            </a>
          </div>
  );
}
