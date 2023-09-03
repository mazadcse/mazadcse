---
id: 083020231252pm
title: "Write a function in oracle"
description: "How to write function ton return a cursor table in oracle"
updated:  
created:  
image: "/content/cover/dns.png"
head:
  meta:
    - name: "keywords"
      content: "oracle, function, cursor, table"
    - name: "robots"
      content: "index, follow"
    - name: "author"
      content: "Mahedi Azad"
    - property: "og:type"
      content: "article"
    - name: "twitter:card"
      content: "summary_large_image"
tags:
  - oracle
  - plsql
  - function
  - table
series: Oracle
navOrder: 1
---

 
## Table structure of table 'table_name'
table_id | full_name | created_at | updated_at
-------- | ----------|------------|-----------------------
1 | name-1 | 30/08/2023 12:50:00PM | null
2 | name-2 | 30/08/2023 12:50:00PM | 30/08/2023 01:50:20PM

## Function example
```oraclesqlplus
 FUNCTION function_name (p_date_from     IN DATE)
      RETURN SYS_REFCURSOR
   AS
      c_data   SYS_REFCURSOR;
      v_date_from        DATE;
   BEGIN
      OPEN c_data FOR
        SELECT ROWNUM AS sl, * 
        FROM table_name  
        WHERE created_at between trunc(p_date_from) and sysdate;
      RETURN c_data;
      CLOSE c_data;
   END function_name;;
```


### Referances
 - [oracletutorial.com](https://www.oracletutorial.com/plsql-tutorial/plsql-cursor-variables/)
