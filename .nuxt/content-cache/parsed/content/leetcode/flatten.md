{"parsed":{"_path":"/leetcode/flatten","_dir":"leetcode","_draft":false,"_partial":false,"_locale":"","_empty":false,"title":"Flatten","description":"My Solution:","problemUrl":"https://www.greatfrontend.com/questions/javascript/flatten","tags":["javascript","arrays","recursion"],"body":{"type":"root","children":[{"type":"element","tag":"p","props":{},"children":[{"type":"element","tag":"strong","props":{},"children":[{"type":"text","value":"My Solution"}]},{"type":"text","value":":"}]},{"type":"element","tag":"code","props":{"className":["language-js"],"code":"/**\r\n * @param {Array<*|Array>} arr\r\n * @return {Array}\r\n */\r\nfunction flatten(arr) {\r\n  let flattenedArray = [];\r\n\r\n  for (let x of arr) {\r\n    if (!Array.isArray(x)) {\r\n      flattenedArray.push(x)\r\n    } else {\r\n      flattenedArray.push(...flatten(x))\r\n    }\r\n  }\r\n\r\n  return flattenedArray\r\n}\n","language":"js","meta":""},"children":[{"type":"element","tag":"pre","props":{},"children":[{"type":"element","tag":"code","props":{"__ignoreMap":""},"children":[{"type":"element","tag":"span","props":{"class":"line","line":1},"children":[{"type":"element","tag":"span","props":{"class":"ct-188924"},"children":[{"type":"text","value":"/**\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":2},"children":[{"type":"element","tag":"span","props":{"class":"ct-188924"},"children":[{"type":"text","value":" * "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"@param"}]},{"type":"element","tag":"span","props":{"class":"ct-188924"},"children":[{"type":"text","value":" "}]},{"type":"element","tag":"span","props":{"class":"ct-298646"},"children":[{"type":"text","value":"{Array<*|Array>}"}]},{"type":"element","tag":"span","props":{"class":"ct-188924"},"children":[{"type":"text","value":" "}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"arr\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":3},"children":[{"type":"element","tag":"span","props":{"class":"ct-188924"},"children":[{"type":"text","value":" * "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"@return"}]},{"type":"element","tag":"span","props":{"class":"ct-188924"},"children":[{"type":"text","value":" "}]},{"type":"element","tag":"span","props":{"class":"ct-298646"},"children":[{"type":"text","value":"{Array}\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":4},"children":[{"type":"element","tag":"span","props":{"class":"ct-188924"},"children":[{"type":"text","value":" */\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":5},"children":[{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"function"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" "}]},{"type":"element","tag":"span","props":{"class":"ct-215352"},"children":[{"type":"text","value":"flatten"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"("}]},{"type":"element","tag":"span","props":{"class":"ct-298646"},"children":[{"type":"text","value":"arr"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":") {\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":6},"children":[{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"  "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"let"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" flattenedArray "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"="}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" [];\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":7},"children":[{"type":"element","tag":"span","props":{},"children":[{"type":"text","value":"\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":8},"children":[{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"  "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"for"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" ("}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"let"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" x "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"of"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" arr) {\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":9},"children":[{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"    "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"if"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" ("}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"!"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"Array."}]},{"type":"element","tag":"span","props":{"class":"ct-215352"},"children":[{"type":"text","value":"isArray"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"(x)) {\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":10},"children":[{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"      flattenedArray."}]},{"type":"element","tag":"span","props":{"class":"ct-215352"},"children":[{"type":"text","value":"push"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"(x)\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":11},"children":[{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"    } "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"else"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" {\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":12},"children":[{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"      flattenedArray."}]},{"type":"element","tag":"span","props":{"class":"ct-215352"},"children":[{"type":"text","value":"push"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"("}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"..."}]},{"type":"element","tag":"span","props":{"class":"ct-215352"},"children":[{"type":"text","value":"flatten"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"(x))\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":13},"children":[{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"    }\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":14},"children":[{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"  }\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":15},"children":[{"type":"element","tag":"span","props":{},"children":[{"type":"text","value":"\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":16},"children":[{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"  "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"return"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" flattenedArray\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":17},"children":[{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"}"}]}]}]}]}]},{"type":"element","tag":"style","children":[{"type":"text","value":".ct-188924{color:#8B949E;}\n.ct-422695{color:#FF7B72;}\n.ct-298646{color:#FFA657;}\n.ct-212021{color:#C9D1D9;}\n.ct-215352{color:#D2A8FF;}"}]}],"toc":{"title":"","searchDepth":2,"depth":1,"links":[]}},"_type":"markdown","_id":"content:leetcode:flatten.md","_source":"content","_file":"leetcode/flatten.md","_extension":"md"},"hash":"Tn1WbbKqK8"}