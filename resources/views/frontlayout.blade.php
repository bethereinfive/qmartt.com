<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>QmarT</title>
    <meta name="google-site-verification" content="KlFD8HcyZl4za4AVCB5vKHA5bd--3nl7yzZSYVKZnVM" />
    <link rel="shortcut icon" type="image/x-icon" href="{{ asset('frontend2/static/img/smallLogo.png') }}">
    <meta name="csrf-token" content="{{ csrf_token() }}">






    <link href="{{ asset('frontend2/css/chunk-elementUI-228e3e39.713245b3.css') }}" rel="stylesheet" />
    <link href="{{ asset('frontend2/css/app-017397ff.713245b3.css') }}" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="{{ asset('frontend2/css/chunk.1548.713245b3.css') }}" />
    <link rel="stylesheet" type="text/css" href="{{ asset('frontend2/css/chunk.813.713245b3.css') }}" />

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.1.1/css/all.min.css" integrity="sha512-ioRJH7yXnyX+7fXTQEKPULWkMn3CqMcapK0NNtCN8q//sW7ZeVFcbMJ9RvX99TwDg6P8rAH2IqUSt2TLab4Xmw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

        <style>
            *{
                --defaltColor:#0074BD;
                --button1:#C6E037;
                --button2:#FFEC76;
            }
        </style>

    <link rel="stylesheet" href="{{ asset('css/app.css?ver=1.0.0') }}">
</head>
<body>
    <div id="app">
        <component :is="$route.meta.layout || 'div'" >
            <router-view />
          </component>

    </div>
    <script>
console.log("{{ Auth::user() }}")

        if ("{{ Auth::user() }}") {

            const storeToken = localStorage.getItem('token');


            if(!storeToken){

                let data = {'_token': "{{ csrf_token() }}"};
                fetch("/logout", {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
                }).then(res => {

                });

                // axios.post('/logout').then(()=>{
                //     // window.location.href = '/'
                // })
            }


        }else{

                localStorage.removeItem('token')
                localStorage.removeItem('user')
                localStorage.removeItem('userid')
                localStorage.removeItem('role')
                localStorage.removeItem('position')
        }

        </script>


    <script src="{{ asset('js/frontend.js?ver=1.0.12') }}"></script>



</body>
</html>
