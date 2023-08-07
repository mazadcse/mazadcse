{"parsed":{"_path":"/code/find-pivot-index","_dir":"code","_draft":false,"_partial":false,"_locale":"","_empty":false,"title":"Find Pivot Index","description":"My Solution:","problemUrl":"https://leetcode.com/problems/find-pivot-index/","alternateQuestion":"https://leetcode.com/problems/find-the-middle-index-in-array/","tags":["python","prefix sum"],"body":{"type":"root","children":[{"type":"element","tag":"p","props":{},"children":[{"type":"element","tag":"strong","props":{},"children":[{"type":"text","value":"My Solution"}]},{"type":"text","value":":"}]},{"type":"element","tag":"code","props":{"className":["language-py"],"code":"def pivotIndex(nums: List[int]) -> int:\r\n    for i in range(len(nums)):\r\n        if sum(nums[:i]) == sum(nums[i+1:]):\r\n            return i\r\n\r\n    return -1\n","language":"py","meta":""},"children":[{"type":"element","tag":"pre","props":{},"children":[{"type":"element","tag":"code","props":{"__ignoreMap":""},"children":[{"type":"element","tag":"span","props":{"class":"line","line":1},"children":[{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"def"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" "}]},{"type":"element","tag":"span","props":{"class":"ct-215352"},"children":[{"type":"text","value":"pivotIndex"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"(nums: List["}]},{"type":"element","tag":"span","props":{"class":"ct-848546"},"children":[{"type":"text","value":"int"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"]) -> "}]},{"type":"element","tag":"span","props":{"class":"ct-848546"},"children":[{"type":"text","value":"int"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":":\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":2},"children":[{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"    "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"for"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" i "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"in"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" "}]},{"type":"element","tag":"span","props":{"class":"ct-848546"},"children":[{"type":"text","value":"range"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"("}]},{"type":"element","tag":"span","props":{"class":"ct-848546"},"children":[{"type":"text","value":"len"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"(nums)):\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":3},"children":[{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"        "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"if"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" "}]},{"type":"element","tag":"span","props":{"class":"ct-848546"},"children":[{"type":"text","value":"sum"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"(nums[:i]) "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"=="}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" "}]},{"type":"element","tag":"span","props":{"class":"ct-848546"},"children":[{"type":"text","value":"sum"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"(nums[i"}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"+"}]},{"type":"element","tag":"span","props":{"class":"ct-848546"},"children":[{"type":"text","value":"1"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":":]):\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":4},"children":[{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"            "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"return"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" i\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":5},"children":[{"type":"element","tag":"span","props":{},"children":[{"type":"text","value":"\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":6},"children":[{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":"    "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"return"}]},{"type":"element","tag":"span","props":{"class":"ct-212021"},"children":[{"type":"text","value":" "}]},{"type":"element","tag":"span","props":{"class":"ct-422695"},"children":[{"type":"text","value":"-"}]},{"type":"element","tag":"span","props":{"class":"ct-848546"},"children":[{"type":"text","value":"1"}]}]}]}]}]},{"type":"element","tag":"style","children":[{"type":"text","value":".ct-422695{color:#FF7B72;}\n.ct-212021{color:#C9D1D9;}\n.ct-215352{color:#D2A8FF;}\n.ct-848546{color:#79C0FF;}"}]}],"toc":{"title":"","searchDepth":2,"depth":1,"links":[]}},"_type":"markdown","_id":"content:code:find-pivot-index.md","_source":"content","_file":"code/find-pivot-index.md","_extension":"md"},"hash":"NRBObKrbwe"}