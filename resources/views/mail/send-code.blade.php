@component('mail::message')
# Your verification code

## {{ $data['code'] }}


Thanks,<br>
{{ config('app.name') }}
@endcomponent
