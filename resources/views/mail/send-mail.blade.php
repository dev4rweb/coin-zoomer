@component('mail::message')
# Incoming from {{$data['email']}}

Name - {{$data['userName']}}. <br>
Telegram - {{$data['contact']}}. <br>
Coin name - {{$data['coinName']}}. <br>
Message - {{$data['message']}}.

@component('mail::button', ['url' => 'https://coinzoomer.com'])
Visit
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
