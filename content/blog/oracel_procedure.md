---
id: 083020231234pm
title: "Computer Networks: DNS Basics"
description: "How to write procedure in oracle"
updated:  
created:  
image: "/content/cover/dns.png"
head:
  meta:
    - name: "keywords"
      content: "oracle, procedure"
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
  - procedure
series: Oracle
navOrder: 1
---

 
## Table structure of table 'table_name'
table_id | full_name | created_at | updated_at
-------- | ----------|------------|-----------
1 | name-1 | 30/08/2023 | 12:50:00PM 
2 | name-2 | 30/08/2023 | 12:50:00PM 

## Procedure example
```oraclesqlplus
PROCEDURE data_entry (p_tbale_id         IN OUT table_name.table_id_id%TYPE,
                      p_full_name        IN     table_name.full_name%TYPE,
                      o_status_code         OUT NUMBER,
                      o_status_message      OUT VARCHAR2)
IS
    is_insert       BOOLEAN := FALSE;
    v_table_id   NUMBER;
    v_table_rec     table_name%ROWTYPE;

    PROCEDURE set_status (p_status_code      IN NUMBER,
                          p_status_message   IN VARCHAR2)
    IS
    BEGIN
        o_status_code := p_status_code;
        o_status_message := p_status_message;
    END set_status;
BEGIN
    IF p_table_id IS NULL
    THEN
       <<check_data>>
        BEGIN
            SELECT COUNT (*)
              INTO v_count
              FROM table_name
             WHERE UPPER (TRIM (name)) = UPPER (TRIM (p_full_name));

            IF v_count > 0
            THEN
                set_status (99, 'SORRY! DATA ALREADY EXIST');
                RETURN;
            END IF;
        EXCEPTION
            WHEN OTHERS
            THEN
                set_status (99, 'SORRY! DATA SEARCH PROBLEM-' || SQLERRM);
                RETURN;
        END check_data;

        SELECT NVL (MAX (table_id), 0) + 1 INTO v_table_id FROM tbale_name;

        is_insert := TRUE;
    ELSE
       <<get_data>>
        BEGIN
            SELECT *
              INTO v_table_rec
              FROM table_name
             WHERE table_id = p_table_id;
        EXCEPTION
            WHEN NO_DATA_FOUND
            THEN
                set_status (99, 'SORRY! RECORD NOT FOUND.');
                RETURN;
        END get_data;

       <<check_data>>
        BEGIN
            SELECT COUNT (*)
              INTO v_count
              FROM table_name
             WHERE     UPPER (TRIM (full_name)) = UPPER (TRIM (p_full_name))
                   AND table_id != p_table_id;

            IF v_count > 0
            THEN
                set_status (99, 'SORRY! FISCAL YEAR ALREADY EXIST');
                RETURN;
            END IF;
        EXCEPTION
            WHEN OTHERS
            THEN
                set_status (99,
                            'SORRY! FISCAL YEAR SEARCH PROBLEM-' || SQLERRM);
                RETURN;
        END check_data;
    END IF;

    MERGE INTO table_name a
         USING (SELECT p_table_id AS table_id, p_full_name AS full_name
                  FROM DUAL) b
            ON (a.table_id = b.table_id)
    WHEN NOT MATCHED
    THEN
        INSERT     (table_id, full_name, created_at)
            VALUES (v_table_id_id, p_full_name, SYSDATE)
    WHEN MATCHED
    THEN
        UPDATE SET a.full_name = b.full_name, a.update_date = SYSDATE;

    IF is_insert
    THEN
        p_table_id := v_table_id;
        set_status (1, 'SUCESSFULLY INSERTED RECORD');
        RETURN;
    ELSE
        set_status (1, 'SUCESSFULLY UPDATED RECORD');
        RETURN;
    END IF;
EXCEPTION
    WHEN OTHERS
    THEN
        set_status (99, 'RECORD ENTRY PROBLEM OCCURED. ' || SQLERRM);
END data_entry;
```


### Referances
 - [oracletutorial.com](https://www.oracletutorial.com/plsql-tutorial/plsql-procedure/)
 - [javatpoint.com](https://www.javatpoint.com/oracle-procedure)
