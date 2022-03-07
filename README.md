# slava-ukraini
## How to add the script to your website?
* Include the script tag
<script src="https://cdn.jsdelivr.net/gh/kitas-zmogus/slava-ukraini/slava-ukraini.js"></script>
*Example:*
```
<script src="https://cdn.jsdelivr.net/gh/kitas-zmogus/slava-ukraini/slava-ukraini.js"></script>
</body>
</html>
```
* In the WordPress theme you can add this as a snippet ([WP add-on](https://www.google.com/search?q=how%20to%20install%20code%20snippet%20in%20WP)) or in your functions.php (this is less reliable as can be overwritten by WP update)
```php
function su_scripts() {
  wp_register_script('slava-ukraini', 'https://cdn.jsdelivr.net/gh/kitas-zmogus/slava-ukraini/slava-ukraini.js', null, null, true);
  wp_enqueue_script('slava-ukraini');
}
add_action('wp_enqueue_scripts', 'su_scripts');
```
* Using google tag manager https://support.google.com/tagmanager/answer/6107167?hl=en
