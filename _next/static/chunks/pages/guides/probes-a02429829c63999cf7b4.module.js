(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{LSgu:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n("wx14"),r=n("Ff2n"),s=n("q1tI"),i=n.n(s),o=n("7ljp"),l=n("er9C"),b=(i.a.createElement,{}),c={meta:b},p=e=>{var{children:t}=e,n=Object(r.a)(e,["children"]);return Object(o.b)(l.a,Object(a.a)({meta:b},n),t)};function u(e){var{components:t}=e,n=Object(r.a)(e,["components"]);return Object(o.b)(p,Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"probes"},"Probes",Object(o.b)("a",{parentName:"h1",href:"#probes",title:"Direct link to heading",className:"anchor"},Object(o.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(o.b)("p",null,"Probes are the heart of the monitoring requests. Probes are arrays of request objects defined in the config file ",Object(o.b)("inlineCode",{parentName:"p"},"config.json")," like so."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'  "probes": [\n    {\n      "id": "1",\n      "name": "Name of the probe",\n      "description": "Probe to check GET time",\n      "interval": 10,\n      "requests": [{ }],\n      "alerts": []\n    },\n    {\n      "id": "2",\n      "name": "Name of the probe 2",\n      "description": "Probe to check GET health",\n      "interval": 10,\n      "requests": [{ }],\n      "alerts": []\n    }\n  ]\n')),Object(o.b)("p",null,"Monika goes through each probe object, sends it out, and determines whether an alert or notification need to be sent out."),Object(o.b)("h2",{id:"request-anatomy"},"Request Anatomy",Object(o.b)("a",{parentName:"h2",href:"#request-anatomy",title:"Direct link to heading",className:"anchor"},Object(o.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(o.b)("p",null,"An actual probe request may be something like below."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'  "probes": [\n    {\n      "id": "1",\n      "name": "Example: get Time",\n      "description": "Probe",\n      "interval": 10,\n      "requests": [{\n        "method": "POST",\n        "url": "https://mybackend.org/user/login",\n        "timeout": 7000,\n        "headers": {\n          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkhlbGxvIGZyb20gSHlwZXJqdW1wIiwiaWF0IjoxNTE2MjM5MDIyfQ.T2SbP1G39CMD4MMfkOZYGFgNIQgNkyi0sPdiFi_DfVA"\n        },\n        "body": {\n          "username": "someusername",\n          "password": "somepassword"\n        }\n      }],\n      "incidentThreshold": 3,\n      "recoveryThreshold": 3,\n      "alerts": ["status-not-2xx", "response-time-greater-than-200-ms"]\n    },\n  ]\n')),Object(o.b)("p",null,"Details of the field are give in the table below."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Topic"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"method"),Object(o.b)("td",{parentName:"tr",align:null},"Http method such as GET, POST, PUT, DELETE")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"url"),Object(o.b)("td",{parentName:"tr",align:null},"This is the url endpoint to dispatch the request to")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"timeout"),Object(o.b)("td",{parentName:"tr",align:null},"Request timeout, after which time, ",Object(o.b)("inlineCode",{parentName:"td"},"Monika"),"will assume timeout")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"headers"),Object(o.b)("td",{parentName:"tr",align:null},"Your http header")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"body"),Object(o.b)("td",{parentName:"tr",align:null},"Any http body if your method requires it")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"interval (optional)"),Object(o.b)("td",{parentName:"tr",align:null},"Number of probe's interval (in seconds). Default value is 10 seconds.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"incidentThreshold (optional)"),Object(o.b)("td",{parentName:"tr",align:null},"Number of times an alert should return true before Monika sends notifications. For example, when incidentThreshold is 3, Monika will only send notifications when the probed URL returns non-2xx status 3 times in a row. After sending the notifications, Monika will not send notifications anymore until the alert status changes. Default value is 5.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"recoveryThreshold (optional)"),Object(o.b)("td",{parentName:"tr",align:null},"Number of times an alert should return false before Monika sends notifications. For example, when recoveryThreshold is 3, Monika will only send notifications when the probed URL returns status 2xx 3 times in a row. After sending the notifications, Monika will not send notifications anymore until the alert status changes. Default value is 5.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"alerts"),Object(o.b)("td",{parentName:"tr",align:null},"The condition which will trigger an alert, and the subsequent notification method to send out the alert. See below for further details on alerts and notifications.")))),Object(o.b)("h3",{id:"html-form-submission-example"},"HTML-form-submission Example",Object(o.b)("a",{parentName:"h3",href:"#html-form-submission-example",title:"Direct link to heading",className:"anchor"},Object(o.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(o.b)("p",null,"Here is probes example with POST request to simulate HTML form submission"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'  "probes": [\n    {\n      "id": "1",\n      "name": "HTML form submission",\n      "description": "simulate html form submission",\n      "interval": 10,\n      "requests": [{\n        "method": "POST",\n        "url": "http://www.foo.com/login.php",\n        "timeout": 7000,\n        "headers": {\n          "Content-Type": "application/x-www-form-urlencoded"\n        },\n        "body": {\n          "username": "someusername",\n          "password": "somepassword"\n        }\n      }],\n      "incidentThreshold": 3,\n      "recoveryThreshold": 3,\n      "alerts": ["status-not-2xx", "response-time-greater-than-200-ms"]\n    },\n  ]\n')),Object(o.b)("h3",{id:"multiple-request"},"Multiple request",Object(o.b)("a",{parentName:"h3",href:"#multiple-request",title:"Direct link to heading",className:"anchor"},Object(o.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(o.b)("p",null,"Here is an example configuration with multiple requests:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'  "probes": [\n    {\n      "id": "1",\n      "name": "Probing Github",\n      "description": "simulate html form submission",\n      "interval": 10,\n      "requests": [{\n        "method": "GET",\n        "url": "https://github.com/",\n        "timeout": 7000,\n      },{\n        "method": "GET",\n        "url": "https://github.com/hyperjumptech",\n        "timeout": 7000,\n      }],\n      "incidentThreshold": 3,\n      "recoveryThreshold": 3,\n      "alerts": ["status-not-2xx", "response-time-greater-than-200-ms"]\n    },\n  ]\n')),Object(o.b)("p",null,'In the configuration above, "Probing Github" probe will execute a GET request to ',Object(o.b)("inlineCode",{parentName:"p"},"https://github.com"),". If there are no triggered alerts such as ",Object(o.b)("inlineCode",{parentName:"p"},"status-not-2xx")," or ",Object(o.b)("inlineCode",{parentName:"p"},"response-time-greater-than-200-ms"),", it will execute a GET request to ",Object(o.b)("inlineCode",{parentName:"p"},"https://github.com/hyperjumptech"),"."),Object(o.b)("p",null,"If there is a case where executing GET request to ",Object(o.b)("inlineCode",{parentName:"p"},"https://github.com")," triggered an alert, the next request will not be executed."),Object(o.b)("h3",{id:"requests-chaining"},"Requests Chaining",Object(o.b)("a",{parentName:"h3",href:"#requests-chaining",title:"Direct link to heading",className:"anchor"},Object(o.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(o.b)("p",null,"Monika supports requests chaining, which enables you to do multiple request and use previous request(s) response for other request. For example, after executing a GET request to certain API, the next request could use the previous request(s) response into their path/query parameters or headers."),Object(o.b)("h4",{id:"response-anatomy"},"Response Anatomy",Object(o.b)("a",{parentName:"h4",href:"#response-anatomy",title:"Direct link to heading",className:"anchor"},Object(o.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(o.b)("p",null,"Monika uses ",Object(o.b)("a",{parentName:"p",href:"https://github.com/axios/axios"},"Axios")," to do requests, so the response body is similar just like when you're using Axios. An actual response from a request may be something like below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 200,\n  "statusText": "OK",\n  "headers": { ... },\n  "config": {\n    "url": "https://reqres.in/api/users",\n    "method": "GET",\n    ...\n  },\n  "headers": { ... },\n  "request": { ... },\n  "data": { ... }\n}\n')),Object(o.b)("p",null,"Here is an example on how you could get previous request(s) response data into your next request:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"{{ response.[0].status }} ==> Get status code from first request response\n{{ response.[1].data.token }} ==> Get token from second request response\n{{ response.[2].headers.SetCookie[0] }} ==> Get first cookie from third request response\n")),Object(o.b)("h4",{id:"pass-response-data-as-pathquery-parameters"},"Pass Response Data as Path/Query Parameters",Object(o.b)("a",{parentName:"h4",href:"#pass-response-data-as-pathquery-parameters",title:"Direct link to heading",className:"anchor"},Object(o.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(o.b)("p",null,"Here is an example of passing previous request(s) response into the path/query parameters:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'  "probes": [\n    {\n      "id": "1",\n      "name": "Probing Github",\n      "description": "simulate html form submission",\n      "interval": 10,\n      "requests": [{\n        "method": "GET",\n        "url": "https://reqres.in/api/users",\n        "timeout": 7000,\n      },{\n        "method": "GET",\n        "url": "https://reqres.in/api/users/{{ responses.[0].data.data.[0].id }}",\n        "timeout": 7000,\n      }],\n      "incidentThreshold": 3,\n      "recoveryThreshold": 3,\n      "alerts": ["status-not-2xx", "response-time-greater-than-2000-ms"]\n    },\n  ]\n')),Object(o.b)("p",null,"In the configuration above, the first request will execute fetch all users available. If there are no triggered alerts, the response returned from the first request is ready to be used by the second request using values from ",Object(o.b)("inlineCode",{parentName:"p"},"{{ responses.[0].data }}"),". An example of the first request response should be like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "page": 2,\n  "per_page": 6,\n  "total": 12,\n  "total_pages": 2,\n  "data": [\n    {\n        "id": 7,\n        "email": "michael.lawson@reqres.in",\n        "first_name": "Michael",\n        "last_name": "Lawson",\n        "avatar": "https://reqres.in/img/faces/7-image.jpg"\n    },\n    ...\n  ]\n')),Object(o.b)("p",null,"So, in order to access the ID of the user, we need to define in the config.json as ",Object(o.b)("inlineCode",{parentName:"p"},"{{ responses.[0].data.data.[0].id }}")," to get the first user ID from the first response. What if we want to get the ",Object(o.b)("inlineCode",{parentName:"p"},"page")," data? Simply just define it as ",Object(o.b)("inlineCode",{parentName:"p"},"{{ responses.[0].data.page }}"),"."),Object(o.b)("h4",{id:"pass-response-data-as-headers-value"},"Pass Response Data as Headers value",Object(o.b)("a",{parentName:"h4",href:"#pass-response-data-as-headers-value",title:"Direct link to heading",className:"anchor"},Object(o.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(o.b)("p",null,"Here is an example of passing previous request(s) response into the headers:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'  "probes": [\n    {\n      "id": "1",\n      "name": "Probing Github",\n      "description": "simulate html form submission",\n      "interval": 10,\n      "requests": [{\n        "method": "POST",\n        "url": "https://reqres.in/api/login",\n        "timeout": 7000,\n        "body": {\n          "email": "eve.holt@reqres.in",\n          "password": "cityslicka"\n        }\n      },{\n        "method": "POST",\n        "url": "https://reqres.in/api/users/",\n        "timeout": 7000,\n        "body": {\n            "name": "morpheus",\n            "job": "leader"\n        },\n        "headers": {\n          "Authorization": "Bearer {{ responses.[0].data.token }}"\n        }\n      }],\n      "incidentThreshold": 3,\n      "recoveryThreshold": 3,\n      "alerts": ["status-not-2xx", "response-time-greater-than-2000-ms"]\n    },\n  ]\n')),Object(o.b)("p",null,"In example above, the first request will do the login process. If there are no triggered alerts, the first request will return the token, and the token will be used for Authorization header in order to execute the second request."),Object(o.b)("h2",{id:"execution-order"},"Execution order",Object(o.b)("a",{parentName:"h2",href:"#execution-order",title:"Direct link to heading",className:"anchor"},Object(o.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(o.b)("p",null,"In a configuration with multiple probes, ",Object(o.b)("inlineCode",{parentName:"p"},"Monika")," will perform the requests in sequence in the order that they are entered, one after another."),Object(o.b)("p",null,"On completion, ",Object(o.b)("inlineCode",{parentName:"p"},"Monika")," will sleep until the next interval to start again. At the top of the ",Object(o.b)("inlineCode",{parentName:"p"},"config.json")," file there is an ",Object(o.b)("inlineCode",{parentName:"p"},"interval")," setting. The execution will be restarted after every ",Object(o.b)("inlineCode",{parentName:"p"},"interval"),". If interval is shorter than the amount of time to dispatch all the requests, then ",Object(o.b)("inlineCode",{parentName:"p"},"Monika")," will immediately repeat after the last probe response and any notification alerts sent."),Object(o.b)("h2",{id:"further-reading"},"Further reading",Object(o.b)("a",{parentName:"h2",href:"#further-reading",title:"Direct link to heading",className:"anchor"},Object(o.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"./alerts"},"Alerts")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"./notifications"},"Notifications"))))}u.isMDXComponent=!0},nDaH:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/probes",function(){return n("LSgu")}])}},[["nDaH",0,2,4,1,3,5]]]);