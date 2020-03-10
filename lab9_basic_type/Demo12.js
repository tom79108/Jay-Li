var s1 = '{"faults":[],"bugs":[{"qa_contact":"","is_open":false,"regressions":[],"resolution":"WONTFIX","duplicates":[],"keywords":[],"cc":["hchang.mozilla@gmail.com","jlaster@mozilla.com","rexyrexy2@gmail.com","tymerkaev@gmail.com","wlevine@gmail.com"],"whiteboard":"","type":"defect","is_creator_accessible":true,"mentors_detail":[],"is_cc_accessible":true,"creation_time":"1998-04-07T08:37:03Z","alias":"firstBug","priority":"P3","votes":0,"cf_fx_iteration":"---","mentors":[],"id":35,"depends_on":[],"status":"VERIFIED","groups":[],"comment_count":18,"target_milestone":"---","cf_qa_whiteboard":"","cc_detail":[{"id":475800,"email":"hchang.mozilla@gmail.com","name":"hchang.mozilla@gmail.com","nick":"hchang","real_name":"Henry Chang [:hchang]"},{"email":"jlaster@mozilla.com","id":555817,"name":"jlaster@mozilla.com","real_name":"Jason Laster [:jlast]","nick":"jlast"},{"real_name":"","nick":"rexyrexy2","name":"rexyrexy2@gmail.com","email":"rexyrexy2@gmail.com","id":463956},{"nick":"tymerkaev","real_name":"","name":"tymerkaev@gmail.com","id":356256,"email":"tymerkaev@gmail.com"},{"email":"wlevine@gmail.com","id":68465,"real_name":"Will Levine","nick":"wlevine","name":"wlevine@gmail.com"}],"creator_detail":{"nick":"weitsang","real_name":"","name":"weitsang@cs.cornell.edu","id":55,"email":"weitsang@cs.cornell.edu"},"regressed_by":[],"cf_fx_points":"---","last_change_time":"2018-07-16T03:22:35Z","op_sys":"Solaris","assigned_to_detail":{"name":"mcafee@gmail.com","real_name":"Chris McAfee","nick":"mcafee","email":"mcafee@gmail.com","id":1672},"flags":[],"platform":"Sun","summary":"Navigator does not free preference hash table when exit.","classification":"Graveyard","blocks":[],"url":"","dupe_of":null,"cf_user_story":"","version":"1998-03-31","severity":"minor","creator":"weitsang@cs.cornell.edu","component":"XFE","assigned_to":"mcafee@gmail.com","product":"MozillaClassic Graveyard","see_also":[],"is_confirmed":true,"cf_last_resolved":"1998-12-12T17:06:46Z"}]}'
var s2 = `
{
    "faults": [
      
    ],
    "bugs": [
      {
        "qa_contact": "",
        "is_open": false,
        "regressions": [
          
        ],
        "resolution": "WONTFIX",
        "duplicates": [
          
        ],
        "keywords": [
          
        ],
        "cc": [
          "hchang.mozilla@gmail.com",
          "jlaster@mozilla.com",
          "rexyrexy2@gmail.com",
          "tymerkaev@gmail.com",
          "wlevine@gmail.com"
        ],
        "whiteboard": "",
        "type": "defect",
        "is_creator_accessible": true,
        "mentors_detail": [
          
        ],
        "is_cc_accessible": true,
        "creation_time": "1998-04-07T08:37:03Z",
        "alias": "firstBug",
        "priority": "P3",
        "votes": 0,
        "cf_fx_iteration": "---",
        "mentors": [
          
        ],
        "id": 35,
        "depends_on": [
          
        ],
        "status": "VERIFIED",
        "groups": [
          
        ],
        "comment_count": 18,
        "target_milestone": "---",
        "cf_qa_whiteboard": "",
        "cc_detail": [
          {
            "id": 475800,
            "email": "hchang.mozilla@gmail.com",
            "name": "hchang.mozilla@gmail.com",
            "nick": "hchang",
            "real_name": "Henry Chang [:hchang]"
          },
          {
            "email": "jlaster@mozilla.com",
            "id": 555817,
            "name": "jlaster@mozilla.com",
            "real_name": "Jason Laster [:jlast]",
            "nick": "jlast"
          },
          {
            "real_name": "",
            "nick": "rexyrexy2",
            "name": "rexyrexy2@gmail.com",
            "email": "rexyrexy2@gmail.com",
            "id": 463956
          },
          {
            "nick": "tymerkaev",
            "real_name": "",
            "name": "tymerkaev@gmail.com",
            "id": 356256,
            "email": "tymerkaev@gmail.com"
          },
          {
            "email": "wlevine@gmail.com",
            "id": 68465,
            "real_name": "Will Levine",
            "nick": "wlevine",
            "name": "wlevine@gmail.com"
          }
        ],
        "creator_detail": {
          "nick": "weitsang",
          "real_name": "",
          "name": "weitsang@cs.cornell.edu",
          "id": 55,
          "email": "weitsang@cs.cornell.edu"
        },
        "regressed_by": [
          
        ],
        "cf_fx_points": "---",
        "last_change_time": "2018-07-16T03:22:35Z",
        "op_sys": "Solaris",
        "assigned_to_detail": {
          "name": "mcafee@gmail.com",
          "real_name": "Chris McAfee",
          "nick": "mcafee",
          "email": "mcafee@gmail.com",
          "id": 1672
        },
        "flags": [
          
        ],
        "platform": "Sun",
        "summary": "Navigator does not free preference hash table when exit.",
        "classification": "Graveyard",
        "blocks": [
          
        ],
        "url": "",
        "dupe_of": null,
        "cf_user_story": "",
        "version": "1998-03-31",
        "severity": "minor",
        "creator": "weitsang@cs.cornell.edu",
        "component": "XFE",
        "assigned_to": "mcafee@gmail.com",
        "product": "MozillaClassic Graveyard",
        "see_also": [
          
        ],
        "is_confirmed": true,
        "cf_last_resolved": "1998-12-12T17:06:46Z"
      }
    ]
  }
  `
  var o1 = JSON.parse(s1);
  var o2 = JSON.parse(s2);

  console.log(typeof o1, typeof o2);
  console.log("o1:\n",o1);
  console.log("o2:\n",o2);