'use client';

import { Button } from "@/components/ui/button";
import { FileTextIcon } from "lucide-react";
import { useState } from "react";

export default function DownloadMyResume() {
  const [state, setState] = useState({
    wantToLearn: "my work",
    download: "my resume",
    link: ""
  })

  const [jsHover, setJsHover] = useState(false)

  const changeMyWork = () => {
    if (state.wantToLearn == "my work" && state.download != "me") {
      setState({
        ...state,
        wantToLearn: "me",
      })
    }
  }

  const changeDownload = () => {
    if (state.download == "my resume") {
      setState({
        ...state,
        download: "me",
        link: (state.wantToLearn == "my work" ? "/resume.pdf" : atob("L2I/aXNQZW5ndWluPXRydWUmbGFwdG9wPW9u"))
      })
    }
  }

  const redirectIfApplicable = () => {
    if (state.link) {
      console.log(state.link)
      window.location.href = state.link
    }
  }

  return (

    <div className="flex flex-col justify-center items-center px-2">
      <div className="text-center mb-4 text-xl font-bold">Want to learn more about&nbsp;
        <span onClick={changeMyWork}
        >{state.wantToLearn}</span>?</div>
      <div
        className={"text-center mb-8 text-lg" + (jsHover ? " hover:text-purple-600" : "")}
        onClick={redirectIfApplicable}
        onMouseEnter={() => state.download == "me" ? setJsHover(true) : null}
        onMouseLeave={() => state.download == "me" ? setJsHover(false) : null}
      >Download  <span onClick={changeDownload}
      >{state.download}</span>!</div>
      <a href="/resume.pdf">
        <Button className="w-[300px] text-2xl font-bold p-8" >
          <FileTextIcon style={{ height: '22px', width: '22px' }} /> Download
        </Button>
      </a>
    </div>
  );
}
