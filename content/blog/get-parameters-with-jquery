---
id: 050820231001pm
title: "My First Test Blog"
description: "How to get the value from the GET parameters with jquery."
updated: 1688877769801
created: 1645422712314
image: "/content/cover/https.png"
head:
  meta:
    - name: "keywords"
      content: "url,jquery"
    - name: "robots"
      content: "index, follow"
    - name: "author"
      content: "Mahedi (@mazadcse)"
    - property: "og:type"
      content: "article"
    - name: "twitter:card"
      content: "summary_large_image"
tags:
  - url
  - jquery 
series: Jquery
navOrder: 1
---

## Way
 Example url http://example.com?id=123&name=mahedi To get the value of id and name with jquery. Function code

```javascript
function getUrlParameters(parameter, staticURL, decode){
    var currLocation = (staticURL.length)? staticURL : window.location.search,
            parArr = currLocation.split("?")[1].split("&"),
            returnBool = true;
    for(var i = 0; i < parArr.length; i++){
        parr = parArr[i].split("=");
        if(parr[0] == parameter){
            return (decode) ? decodeURIComponent(parr[1]) : parr[1];
            returnBool = true;
        }else{
            returnBool = false;
        }
    }
    if(!returnBool) return false;
}



//uses
 var id = getUrlParameters("id", "", true);
 var name= getUrlParameters("name", "", true);

```
