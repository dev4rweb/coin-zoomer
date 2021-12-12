# Creating react-laravel project

1. composer create-project laravel/laravel project-name
2. [create repository on github](https://github.com/new)
3. git init
4. git add .
5. git commit -m "Init"
6. git remote add origin https://github.com/dev4rweb/project-name.git
7. git push -u origin master
8. [github.com/laravel/ui](https://github.com/laravel/ui)
9. composer require laravel/ui
10. php artisan ui react --auth
11. php artisan serve
12. npm run install && npm run dev
13. database>seeders>DatabaseSeader.php - create user

```injectablephp
public function run() {
    // \App\Models\User::factory(10)->create();
    User::factory()->create([
        'name' => 'Admin',
        'email' => 'admin@gmail.com',
        'password' => \bcrypt('secret')
    ]);
}
```

14. php artisan migrate --seed
15. npm run production
16. git add .
17. git commit -m "Adding laravel UI"
18. git push
19. [inertiajs.com](https://inertiajs.com/)
20. composer require inertiajs/inertia-laravel
21. resources/views/app.blade.php - create in paste html from site

```html

<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet"/>
    <script src="{{ mix('/js/app.js') }}" defer></script>
</head>
<body>
@inertia
</body>
```
