# highlight-selection
A simple **ReactJS** component that allow's you to change the default selection color and background of text when highlighted.

### Installation 

```
# via npm
npm install highlight-selection

# via yarn
yarn install highlight-selection
```

### Usage

```
import HighLight from 'highlight-selection';

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
| color | sets the text color | string | white, black, yellow, dodgerblue, blue, red, pink, grey, orange, green, purple
| bg | sets the background color | string | white, black, yellow, dodgerblue, blue, red, pink, grey, orange, green, purple

For Example:
```
<Highlight color="blue" bg="yellow">
    <p>This is a paragraph</p>  
</Highlight>
```

 If you want to set just the color or background color you can pass an empty prop or just pass it the value 0 or false for example color={0} that way background will still be enabled except for color it will not be. The class of the inactive bg or color will still be included in the dom but that shouldnt cause any issue at all. I am working on adding more support and functionality to this package as we speak.
