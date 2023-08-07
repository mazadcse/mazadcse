{"parsed":{"_path":"/code/remove-duplicates-from-sorted-array","_dir":"code","_draft":false,"_partial":false,"_locale":"","_empty":false,"title":"Remove Duplicates from Sorted Array","description":"My Solution:","problemUrl":"https://leetcode.com/problems/remove-duplicates-from-sorted-array/","tags":["javascript","arrays"],"body":{"type":"root","children":[{"type":"element","tag":"p","props":{},"children":[{"type":"element","tag":"strong","props":{},"children":[{"type":"text","value":"My Solution"}]},{"type":"text","value":":"}]},{"type":"element","tag":"code","props":{"className":["language-javascript"],"code":"/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar removeDuplicates = function(nums) {\r\n    let i = 0;\r\n    while (i < nums.length) {\r\n        if (nums.indexOf(nums[i]) !== i) {\r\n            nums.splice(i, 1);\r\n        } else {\r\n            i+=1;\r\n        }\r\n        \r\n    };\r\n    return nums.length;\r\n};\n","language":"javascript","meta":""},"children":[{"type":"element","tag":"pre","props":{},"children":[{"type":"element","tag":"code","props":{"__ignoreMap":""},"children":[{"type":"element","tag":"span","props":{"class":"line","line":1},"children":[{"type":"element","tag":"span","props":{"class":"ct-188924"},"children":[{"type":"text","value":"/**\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":2},"children":[{"type":"element","tag":"span","props":{"class":"ct-188924"},"children":[{"type":"text","value":" * "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"@param"}]},{"type":"element","tag":"span","props":{"class":"ct-188924"},"children":[{"type":"text","value":" "}]},{"type":"element","tag":"span","props":{"class":"ct-298646"},"children":[{"type":"text","value":"{number[]}"}]},{"type":"element","tag":"span","props":{"class":"ct-188924"},"children":[{"type":"text","value":" "}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"nums\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":3},"children":[{"type":"element","tag":"span","props":{"class":"ct-188924"},"children":[{"type":"text","value":" * "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"@return"}]},{"type":"element","tag":"span","props":{"class":"ct-188924"},"children":[{"type":"text","value":" "}]},{"type":"element","tag":"span","props":{"class":"ct-298646"},"children":[{"type":"text","value":"{number}\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":4},"children":[{"type":"element","tag":"span","props":{"class":"ct-188924"},"children":[{"type":"text","value":" */\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":5},"children":[{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"var"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" "}]},{"type":"element","tag":"span","props":{"class":"ct-215352"},"children":[{"type":"text","value":"removeDuplicates"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"="}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"function"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"("}]},{"type":"element","tag":"span","props":{"class":"ct-298646"},"children":[{"type":"text","value":"nums"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":") {\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":6},"children":[{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"    "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"let"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" i "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"="}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" "}]},{"type":"element","tag":"span","props":{"class":"ct-848546"},"children":[{"type":"text","value":"0"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":";\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":7},"children":[{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"    "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"while"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" (i "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"<"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" nums."}]},{"type":"element","tag":"span","props":{"class":"ct-848546"},"children":[{"type":"text","value":"length"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":") {\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":8},"children":[{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"        "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"if"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" (nums."}]},{"type":"element","tag":"span","props":{"class":"ct-215352"},"children":[{"type":"text","value":"indexOf"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"(nums[i]) "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"!=="}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" i) {\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":9},"children":[{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"            nums."}]},{"type":"element","tag":"span","props":{"class":"ct-215352"},"children":[{"type":"text","value":"splice"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"(i, "}]},{"type":"element","tag":"span","props":{"class":"ct-848546"},"children":[{"type":"text","value":"1"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":");\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":10},"children":[{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"        } "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"else"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" {\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":11},"children":[{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"            i"}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"+="}]},{"type":"element","tag":"span","props":{"class":"ct-848546"},"children":[{"type":"text","value":"1"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":";\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":12},"children":[{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"        }\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":13},"children":[{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"        \n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":14},"children":[{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"    };\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":15},"children":[{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"    "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"return"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" nums."}]},{"type":"element","tag":"span","props":{"class":"ct-848546"},"children":[{"type":"text","value":"length"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":";\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":16},"children":[{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"};"}]}]}]}]}]},{"type":"element","tag":"style","children":[{"type":"text","value":".ct-188924{color:#8B949E;}\n.ct-422695{color:#FF7B72;}\n.ct-298646{color:#FFA657;}\n.ct-212021{color:#C9D1D9;}\n.ct-215352{color:#D2A8FF;}\n.ct-848546{color:#79C0FF;}"}]}],"toc":{"title":"","searchDepth":2,"depth":1,"links":[]}},"_type":"markdown","_id":"content:code:remove-duplicates-from-sorted-array.md","_source":"content","_file":"code/remove-duplicates-from-sorted-array.md","_extension":"md"},"hash":"uxOWQ7mlpS"}