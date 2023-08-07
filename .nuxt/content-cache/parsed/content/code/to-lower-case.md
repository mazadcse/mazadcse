{"parsed":{"_path":"/code/to-lower-case","_dir":"code","_draft":false,"_partial":false,"_locale":"","_empty":false,"title":"To Lower Case","description":"My Solution:","problemUrl":"https://leetcode.com/problems/to-lower-case/","tags":["javascript","strings"],"body":{"type":"root","children":[{"type":"element","tag":"p","props":{},"children":[{"type":"element","tag":"strong","props":{},"children":[{"type":"text","value":"My Solution"}]},{"type":"text","value":":"}]},{"type":"element","tag":"code","props":{"className":["language-javascript"],"code":"/**\r\n * @param {string} str\r\n * @return {string}\r\n */\r\nvar toLowerCase = function(str) {\r\n    let char_code = 0;\r\n    let lower_case_arr = [];\r\n    for (let i = 0; i < str.length; i++) {\r\n        char_code = str.charCodeAt(i);\r\n        if (char_code >= 65 && char_code <= 90)\r\n            char_code += 32\r\n        lower_case_arr.push(char_code);\r\n    }\r\n    return String.fromCharCode(...lower_case_arr);\r\n};\n","language":"javascript","meta":""},"children":[{"type":"element","tag":"pre","props":{},"children":[{"type":"element","tag":"code","props":{"__ignoreMap":""},"children":[{"type":"element","tag":"span","props":{"class":"line","line":1},"children":[{"type":"element","tag":"span","props":{"class":"ct-188924"},"children":[{"type":"text","value":"/**\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":2},"children":[{"type":"element","tag":"span","props":{"class":"ct-188924"},"children":[{"type":"text","value":" * "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"@param"}]},{"type":"element","tag":"span","props":{"class":"ct-188924"},"children":[{"type":"text","value":" "}]},{"type":"element","tag":"span","props":{"class":"ct-298646"},"children":[{"type":"text","value":"{string}"}]},{"type":"element","tag":"span","props":{"class":"ct-188924"},"children":[{"type":"text","value":" "}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"str\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":3},"children":[{"type":"element","tag":"span","props":{"class":"ct-188924"},"children":[{"type":"text","value":" * "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"@return"}]},{"type":"element","tag":"span","props":{"class":"ct-188924"},"children":[{"type":"text","value":" "}]},{"type":"element","tag":"span","props":{"class":"ct-298646"},"children":[{"type":"text","value":"{string}\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":4},"children":[{"type":"element","tag":"span","props":{"class":"ct-188924"},"children":[{"type":"text","value":" */\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":5},"children":[{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"var"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" "}]},{"type":"element","tag":"span","props":{"class":"ct-215352"},"children":[{"type":"text","value":"toLowerCase"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"="}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"function"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"("}]},{"type":"element","tag":"span","props":{"class":"ct-298646"},"children":[{"type":"text","value":"str"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":") {\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":6},"children":[{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"    "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"let"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" char_code "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"="}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" "}]},{"type":"element","tag":"span","props":{"class":"ct-848546"},"children":[{"type":"text","value":"0"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":";\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":7},"children":[{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"    "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"let"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" lower_case_arr "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"="}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" [];\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":8},"children":[{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"    "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"for"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" ("}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"let"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" i "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"="}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" "}]},{"type":"element","tag":"span","props":{"class":"ct-848546"},"children":[{"type":"text","value":"0"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"; i "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"<"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" str."}]},{"type":"element","tag":"span","props":{"class":"ct-848546"},"children":[{"type":"text","value":"length"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"; i"}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"++"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":") {\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":9},"children":[{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"        char_code "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"="}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" str."}]},{"type":"element","tag":"span","props":{"class":"ct-215352"},"children":[{"type":"text","value":"charCodeAt"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"(i);\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":10},"children":[{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"        "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"if"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" (char_code "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":">="}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" "}]},{"type":"element","tag":"span","props":{"class":"ct-848546"},"children":[{"type":"text","value":"65"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"&&"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" char_code "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"<="}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" "}]},{"type":"element","tag":"span","props":{"class":"ct-848546"},"children":[{"type":"text","value":"90"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":")\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":11},"children":[{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"            char_code "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"+="}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" "}]},{"type":"element","tag":"span","props":{"class":"ct-848546"},"children":[{"type":"text","value":"32\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":12},"children":[{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"        lower_case_arr."}]},{"type":"element","tag":"span","props":{"class":"ct-215352"},"children":[{"type":"text","value":"push"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"(char_code);\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":13},"children":[{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"    }\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":14},"children":[{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"    "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"return"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" String."}]},{"type":"element","tag":"span","props":{"class":"ct-215352"},"children":[{"type":"text","value":"fromCharCode"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"("}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"..."}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"lower_case_arr);\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":15},"children":[{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"};"}]}]}]}]}]},{"type":"element","tag":"style","children":[{"type":"text","value":".ct-188924{color:#8B949E;}\n.ct-422695{color:#FF7B72;}\n.ct-298646{color:#FFA657;}\n.ct-212021{color:#C9D1D9;}\n.ct-215352{color:#D2A8FF;}\n.ct-848546{color:#79C0FF;}"}]}],"toc":{"title":"","searchDepth":2,"depth":1,"links":[]}},"_type":"markdown","_id":"content:code:to-lower-case.md","_source":"content","_file":"code/to-lower-case.md","_extension":"md"},"hash":"UUkQE97U8m"}