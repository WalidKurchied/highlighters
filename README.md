# highlight-selection
A simple **ReactJS** component that allow's you to change the default selection color and background of text when highlighted. It also allows you to disable the selection of elements text.

### Installation 

```
# via npm
npm install highlight-selection

# via yarn
yarn install highlight-selection
```

### Usage

```
import Highlight from 'highlight-selection';

<Highlight>
    This is some text 
    <h1>This is a header</h1>
    <p>This is a paragraph</p>  
</Highlight>
```

Any element or text within the Highlight component will have its selection color and background color change to the default colors of the Highlight component i.e yellow background and black text color.

### Supported Props 

By default the Highlight component will have the **yellow** background color and a **black** text color but this can be overriding using props:

| Prop | Description | Type | Values
| ----------- | ----------- | ----------- | ----------- |
| color | sets the text color | string | white, black, yellow, dodgerblue, blue, red, pink, grey, orange, green, purple, brown, maroon, navy, teal, gold.
| bg | sets the background color | string | white, black, yellow, dodgerblue, blue, red, pink, grey, orange, green, purple, brown, maroon, navy, teal, gold.
disable | disable selection of elements text | boolean | false or true (defaults to false)

For Example:
```
<Highlight color="blue" bg="yellow">
    <p>This is a paragraph</p>  
</Highlight>
```

 If you want to set either the color or background color you can pass an empty string to the prop or just pass it a value like 0 or false etc for example color={0} that way background will still be enabled except for color it will fallback to the default browser selection color. The class of the inactive bg or color will still be included in the dom but that shouldnt cause any issue at all. I am working on adding more support and functionality to this package as we speak.
