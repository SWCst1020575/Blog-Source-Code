import { useState, useEffect } from 'react';
import Markdown from "marked-react";
import Highlight from 'highlight.js';
import Lowlight from 'react-lowlight';
import './Md.css';

import jsStyle from 'highlight.js/lib/languages/javascript'
import tsStyle from 'highlight.js/lib/languages/typescript'
import shStyle from 'highlight.js/lib/languages/shell'
import cStyle from 'highlight.js/lib/languages/c'
import cppStyle from 'highlight.js/lib/languages/cpp'
import pyStyle from 'highlight.js/lib/languages/python'
import javaStyle from 'highlight.js/lib/languages/java'
import goStyle from 'highlight.js/lib/languages/go'
import jsonStyle from 'highlight.js/lib/languages/json'
import rustStyle from 'highlight.js/lib/languages/rust'
import dartStyle from 'highlight.js/lib/languages/dart'
import csStyle from 'highlight.js/lib/languages/csharp'
import dockerStyle from 'highlight.js/lib/languages/dockerfile'
import latexStyle from 'highlight.js/lib/languages/latex'
import kotlinStyle from 'highlight.js/lib/languages/kotlin'

import 'highlight.js/styles/base16/railscasts.css'

Lowlight.registerLanguage('sh', shStyle);
Lowlight.registerLanguage('bash', shStyle);
Lowlight.registerLanguage('js', jsStyle);
Lowlight.registerLanguage('javascript', jsStyle);
Lowlight.registerLanguage('ts', tsStyle);
Lowlight.registerLanguage('typescript', tsStyle);
Lowlight.registerLanguage('c', cStyle);
Lowlight.registerLanguage('cpp', cppStyle);
Lowlight.registerLanguage('c++', cppStyle);
Lowlight.registerLanguage('py', pyStyle);
Lowlight.registerLanguage('python', pyStyle);
Lowlight.registerLanguage('java', javaStyle);
Lowlight.registerLanguage('go', goStyle);
Lowlight.registerLanguage('json', jsonStyle);
Lowlight.registerLanguage('rust', rustStyle);
Lowlight.registerLanguage('dart', dartStyle);
Lowlight.registerLanguage('cs', csStyle);
Lowlight.registerLanguage('c#', csStyle);
Lowlight.registerLanguage('dockerfile', dockerStyle);
Lowlight.registerLanguage('latex', latexStyle);
Lowlight.registerLanguage('kotlin', kotlinStyle);

function Md() {
  const [mdContent, setMdContent] = useState("");
  //const [registeredLang, setregisteredLang] = useState([""]);
  const renderer = {
    code(snippet: string, lang: string) {
     
      return <Lowlight key={Math.random()} language={lang} value={snippet} />;
    },
  };
  useEffect(() => {
    getMarkdownFile();
  });
  function getMarkdownFile() {
    fetch('./README.md')
      .then(response => response.text())
      .then(text => setMdContent(text))
  }
  function getMarkdownText() {
    //const content = fs.readFileSync("./README.md", 'utf-8');
    return <Markdown renderer={renderer} value={mdContent} />;
  }

  return (
    <div className="Markdown">
      {getMarkdownText()}
    </div>
  )
}

export default Md
