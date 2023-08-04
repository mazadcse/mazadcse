<!-- Blog: LeetCode Coding Problems -->
<template>
  <main id="leetcode">
    <Title>{{ seoMeta.title }}</Title>
    <Meta name="description" :content="seoMeta.description" />

    <h1 class="text-3xl text-left font-bold mb-6">LeetCode Solutions</h1>

    <section>
      <template v-if="pending">
        <AppCodeSolutionSkeleton v-for="i in 5" :key="i" />
      </template>
      <template v-else>
        <AppCodeSolutionCard
          v-for="(solution, index) in codeSolutions"
          :key="index"
          :problemTitle="solution.title"
          :url="solution._path"
          :tags="solution.tags"
          :problemUrl="solution.problemUrl"
        />
      </template>
    </section>
  </main>
</template>

<script setup>
  import AppCodeSolutionSkeleton from "../components/skeletons/AppCodeSolutionSkeleton.vue";

  definePageMeta({
    layout: "blog-list-layout"
  });

  const seoMeta = {
    title: "Dawit's LeetCode Solutions",
    description:
      "This page contains my (imperfect) solutions to some LeetCode problems.",
    image: "/og-image.png"
  };

  useServerSeoMeta({
    title: seoMeta.title,
    ogTitle: seoMeta.title,
    twitterTitle: seoMeta.title,
    description: seoMeta.description,
    ogDescription: seoMeta.description,
    twitterDescription: seoMeta.description,
    ogImage: seoMeta.image,
    twitterImage: seoMeta.image,
    ogUrl: `http://mahediazad.com${useRoute().fullPath}`,
    ogType: "website",
    ogLocale: "en_US",
    twitterCard: "summary_large_image"
  });

  // Fetch all LeetCode solutions
/*  const { pending, data: codeSolutions } = await useAsyncData("leetcode", () =>
    queryContent("/leetcode").find()
  );*/

  const pending = false;
  const codeSolutions = [
    {
      "_path": "/leetcode/3-6-9",
      "_dir": "leetcode",
      "_draft": false,
      "_partial": false,
      "_locale": "",
      "_empty": false,
      "title": "3-6-9",
      "description": "My Solution:",
      "problemUrl": "https://binarysearch.com/problems/3-6-9",
      "tags": [
        "python"
      ],
      "body": {
        "type": "root",
        "children": [
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "element",
                "tag": "strong",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "value": "My Solution"
                  }
                ]
              },
              {
                "type": "text",
                "value": ":"
              }
            ]
          },
          {
            "type": "element",
            "tag": "code",
            "props": {
              "className": [
                "language-py"
              ],
              "code": "def solve(n):\n    num_list = []\n\n    for i in range(1, n+1):\n        if i % 3 == 0 or \"3\" in str(i) or \"6\" in str(i) or \"9\" in str(i):\n            num_list.append(\"clap\")\n        else:\n            num_list.append(str(i))\n\n    return num_list\n",
              "language": "py",
              "meta": ""
            },
            "children": [
              {
                "type": "element",
                "tag": "pre",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {
                      "__ignoreMap": ""
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 1
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "def"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-215352"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "solve"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "(n):\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 2
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "    num_list "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "="
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " []\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 3
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "value": "\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 4
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "    "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "for"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " i "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "in"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-848546"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "range"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "("
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-848546"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "1"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": ", n"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "+"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-848546"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "1"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "):\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 5
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "        "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "if"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " i "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "%"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-848546"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "3"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "=="
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-848546"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "0"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "or"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-839335"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "\"3\""
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "in"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-848546"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "str"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "(i) "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "or"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-839335"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "\"6\""
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "in"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-848546"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "str"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "(i) "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "or"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-839335"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "\"9\""
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "in"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-848546"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "str"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "(i):\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 6
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "            num_list.append("
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-839335"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "\"clap\""
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": ")\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 7
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "        "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "else"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": ":\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 8
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "            num_list.append("
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-848546"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "str"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "(i))\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 9
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "value": "\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 10
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "    "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "return"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " num_list"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "style",
            "children": [
              {
                "type": "text",
                "value": ".ct-422695{color:#FF7B72;}\n.ct-212021{color:#C9D1D9;}\n.ct-215352{color:#D2A8FF;}\n.ct-848546{color:#79C0FF;}\n.ct-839335{color:#A5D6FF;}"
              }
            ]
          }
        ],
        "toc": {
          "title": "",
          "searchDepth": 2,
          "depth": 1,
          "links": []
        }
      },
      "_type": "markdown",
      "_id": "content:leetcode:3-6-9.md",
      "_source": "content",
      "_file": "leetcode/3-6-9.md",
      "_extension": "md"
    },
    {
      "_path": "/leetcode/binary-search",
      "_dir": "leetcode",
      "_draft": false,
      "_partial": false,
      "_locale": "",
      "_empty": false,
      "title": "Binary Search",
      "description": "My Solution:",
      "problemUrl": "https://leetcode.com/problems/binary-search/",
      "tags": [
        "python",
        "binary search"
      ],
      "body": {
        "type": "root",
        "children": [
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "element",
                "tag": "strong",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "value": "My Solution"
                  }
                ]
              },
              {
                "type": "text",
                "value": ":"
              }
            ]
          },
          {
            "type": "element",
            "tag": "code",
            "props": {
              "className": [
                "language-py"
              ],
              "code": "def search(nums: List[int], target: int) -> int:\n    index = 0\n    nums_copy = nums[:]\n    midpoint = len(nums_copy)//2\n    \n    while len(nums_copy) > 1 and target != nums_copy[midpoint]:\n        if target > nums_copy[midpoint]:\n            index += midpoint\n            nums_copy[:] = nums_copy[midpoint:]\n        else:\n            nums_copy = nums_copy[:midpoint]\n        \n        midpoint = len(nums_copy)//2\n        \n        \n    return index + midpoint if target == nums_copy[midpoint] else -1\n",
              "language": "py",
              "meta": ""
            },
            "children": [
              {
                "type": "element",
                "tag": "pre",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {
                      "__ignoreMap": ""
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 1
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "def"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-215352"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "search"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "(nums: List["
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-848546"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "int"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "], target: "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-848546"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "int"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": ") -> "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-848546"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "int"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": ":\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 2
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "    index "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "="
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-848546"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "0\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 3
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "    nums_copy "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "="
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " nums[:]\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 4
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "    midpoint "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "="
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-848546"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "len"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "(nums_copy)"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "//"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-848546"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "2\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 5
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "    \n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 6
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "    "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "while"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-848546"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "len"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "(nums_copy) "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": ">"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-848546"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "1"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "and"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " target "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "!="
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " nums_copy[midpoint]:\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 7
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "        "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "if"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " target "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": ">"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " nums_copy[midpoint]:\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 8
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "            index "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "+="
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " midpoint\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 9
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "            nums_copy[:] "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "="
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " nums_copy[midpoint:]\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 10
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "        "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "else"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": ":\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 11
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "            nums_copy "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "="
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " nums_copy[:midpoint]\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 12
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "        \n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 13
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "        midpoint "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "="
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-848546"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "len"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "(nums_copy)"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "//"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-848546"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "2\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 14
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "        \n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 15
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "        \n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 16
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "    "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "return"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " index "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "+"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " midpoint "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "if"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " target "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "=="
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " nums_copy[midpoint] "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "else"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "-"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-848546"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "1"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "style",
            "children": [
              {
                "type": "text",
                "value": ".ct-422695{color:#FF7B72;}\n.ct-212021{color:#C9D1D9;}\n.ct-215352{color:#D2A8FF;}\n.ct-848546{color:#79C0FF;}"
              }
            ]
          }
        ],
        "toc": {
          "title": "",
          "searchDepth": 2,
          "depth": 1,
          "links": []
        }
      },
      "_type": "markdown",
      "_id": "content:leetcode:binary-search.md",
      "_source": "content",
      "_file": "leetcode/binary-search.md",
      "_extension": "md"
    },
    {
      "_path": "/leetcode/binary-tree-inorder-traversal",
      "_dir": "leetcode",
      "_draft": false,
      "_partial": false,
      "_locale": "",
      "_empty": false,
      "title": "Binary Tree Inorder Traversal",
      "description": "My Solution:",
      "problemUrl": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
      "tags": [
        "python",
        "binary trees",
        "inorder traversal",
        "dfs"
      ],
      "body": {
        "type": "root",
        "children": [
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "element",
                "tag": "strong",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "value": "My Solution"
                  }
                ]
              },
              {
                "type": "text",
                "value": ":"
              }
            ]
          },
          {
            "type": "element",
            "tag": "code",
            "props": {
              "className": [
                "language-py"
              ],
              "code": "# Recursive Approach\n\n# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\n\ndef inorderTraversal(root: Optional[TreeNode]) -> List[int]:\n    if not root:\n        return []\n\n    return [*inorderTraversal(root.left), root.val, *inorderTraversal(root.right)]\n",
              "language": "py",
              "meta": ""
            },
            "children": [
              {
                "type": "element",
                "tag": "pre",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {
                      "__ignoreMap": ""
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 1
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-188924"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "# Recursive Approach\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 2
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "value": "\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 3
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-188924"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "# Definition for a binary tree node.\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 4
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-188924"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "# class TreeNode:\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 5
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-188924"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "#     def __init__(self, val=0, left=None, right=None):\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 6
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-188924"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "#         self.val = val\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 7
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-188924"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "#         self.left = left\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 8
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-188924"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "#         self.right = right\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 9
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "value": "\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 10
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "def"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-215352"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "inorderTraversal"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "(root: Optional[TreeNode]) -> List["
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-848546"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "int"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "]:\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 11
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "    "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "if"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "not"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " root:\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 12
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "        "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "return"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " []\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 13
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "value": "\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 14
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "    "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "return"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " ["
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "*"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "inorderTraversal(root.left), root.val, "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "*"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "inorderTraversal(root.right)]"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "style",
            "children": [
              {
                "type": "text",
                "value": ".ct-188924{color:#8B949E;}\n.ct-422695{color:#FF7B72;}\n.ct-212021{color:#C9D1D9;}\n.ct-215352{color:#D2A8FF;}\n.ct-848546{color:#79C0FF;}"
              }
            ]
          }
        ],
        "toc": {
          "title": "",
          "searchDepth": 2,
          "depth": 1,
          "links": []
        }
      },
      "_type": "markdown",
      "_id": "content:leetcode:binary-tree-inorder-traversal.md",
      "_source": "content",
      "_file": "leetcode/binary-tree-inorder-traversal.md",
      "_extension": "md"
    },
    {
      "_path": "/leetcode/binary-tree-postorder-traversal",
      "_dir": "leetcode",
      "_draft": false,
      "_partial": false,
      "_locale": "",
      "_empty": false,
      "title": "Binary Tree Postorder Traversal",
      "description": "My Solution:",
      "problemUrl": "https://leetcode.com/problems/binary-tree-postorder-traversal/",
      "tags": [
        "python",
        "binary trees",
        "postorder traversal",
        "dfs"
      ],
      "body": {
        "type": "root",
        "children": [
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "element",
                "tag": "strong",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "value": "My Solution"
                  }
                ]
              },
              {
                "type": "text",
                "value": ":"
              }
            ]
          },
          {
            "type": "element",
            "tag": "code",
            "props": {
              "className": [
                "language-py"
              ],
              "code": "# Recursive Approach\n\n# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\n\ndef postorderTraversal(root: Optional[TreeNode]) -> List[int]:\n    if not root:\n        return []\n\n    return [*postorderTraversal(root.left), *postorderTraversal(root.right), root.val]\n",
              "language": "py",
              "meta": ""
            },
            "children": [
              {
                "type": "element",
                "tag": "pre",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {
                      "__ignoreMap": ""
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 1
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-188924"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "# Recursive Approach\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 2
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "value": "\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 3
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-188924"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "# Definition for a binary tree node.\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 4
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-188924"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "# class TreeNode:\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 5
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-188924"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "#     def __init__(self, val=0, left=None, right=None):\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 6
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-188924"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "#         self.val = val\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 7
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-188924"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "#         self.left = left\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 8
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-188924"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "#         self.right = right\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 9
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "value": "\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 10
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "def"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-215352"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "postorderTraversal"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "(root: Optional[TreeNode]) -> List["
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-848546"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "int"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "]:\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 11
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "    "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "if"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "not"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " root:\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 12
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "        "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "return"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " []\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 13
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "value": "\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "class": "line",
                          "line": 14
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "    "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "return"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": " ["
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "*"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "postorderTraversal(root.left), "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-422695"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "*"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "class": "ct-212021"
                            },
                            "children": [
                              {
                                "type": "text",
                                "value": "postorderTraversal(root.right), root.val]"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "style",
            "children": [
              {
                "type": "text",
                "value": ".ct-188924{color:#8B949E;}\n.ct-422695{color:#FF7B72;}\n.ct-212021{color:#C9D1D9;}\n.ct-215352{color:#D2A8FF;}\n.ct-848546{color:#79C0FF;}"
              }
            ]
          }
        ],
        "toc": {
          "title": "",
          "searchDepth": 2,
          "depth": 1,
          "links": []
        }
      },
      "_type": "markdown",
      "_id": "content:leetcode:binary-tree-postorder-traversal.md",
      "_source": "content",
      "_file": "leetcode/binary-tree-postorder-traversal.md",
      "_extension": "md"
    },
  ];
</script>
