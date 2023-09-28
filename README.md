# Emoji Replacer Library

The Emoji Replacer Library is a JavaScript library that allows you to replace web emojis with Apple emojis in your web pages. You can use this library by calling the `replaceEmojisWithImages` function provided.

## How it Works

The library searches for web emojis in the specified HTML elements and replaces them with corresponding Apple emoji images. It uses a regular expression to identify web emojis and replaces them with an `<img>` element displaying the Apple emoji image.

## Usage

1. Include the Emoji Replacer Library in your HTML file After Cloning Full Repo With Apple Emojis Inner That:

```html
<script src="emoji.js"></script>
```
Or you can use Cdn Link :
```html
<script src="https://cdn.jsdelivr.net/gh/yesvarg/emoji@main/emoji.js"></script>
```
2. Call the `replaceEmojisWithImages` function to replace the emojis. You can pass the following parameters to the function:

- `element` (optional): The target HTML element(s) to search for emojis. It accepts a CSS selector or an element ID (starts with "#").
- `size` (optional): The size of the emoji images in "em" units. Default is 1.4.
- `marginTop` (optional): The margin-top spacing of the emoji images in "em" units. Default is 0.3.

Example usage:

```html
<script>
replaceEmojisWithImages("#content", 1.6, 0.5);
</script>
```

This will replace emojis within the element with ID "content" with Apple emoji images, setting the size to 1.6em and margin-top to 0.5em.

## Example

Here's an example of how to use the Emoji Replacer Library:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Emoji Replacer Example</title>
  <script src="emoji.js"></script>
</head>
<body>
  <h1>Emoji Replacer Example</h1>

  <div id="content">
    This is a web page with some emojis. 😊🌟✨
  </div>

  <script>
  replaceEmojisWithImages("#content", 1.6, 0.5);
  </script>
</body>
</html>
```

In this example, the emojis within the element with ID "content" will be replaced with Apple emoji images.

## Customization

You can customize the Emoji Replacer Library according to your needs. The `replaceEmojisWithImages` function accepts parameters for size and margin-top spacing. You can also modify the code within the function to adjust the image source, styling, or any other behavior as desired.

## Dependencies

The Emoji Replacer Library requires the Apple emoji images in PNG format. You need to place the emoji image files in a directory (e.g., `src/emoji/`) relative to your HTML file. Make sure the image file names match the names of the web emojis.

## License

This library is licensed under the [MIT License](LICENSE).

Feel free to use and modify the Emoji Replacer Library in your projects. If you have any questions or need further assistance, feel free to ask! 😊
