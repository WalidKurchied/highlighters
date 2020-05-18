#highlight-selection
A simple **ReactJS** package that allow's you to change the color and background of selection of the elements.

### Installation 
`npm install highlight-selection`
or
`yarn install highlight-selection`

### Usage
`import Highlight from 'highlight-selection'`


```
<Highlight>
    This is some text 
    <h1>This is a header</h1>
    <p>This is a paragraph</p>  
</Highlight>
```
Any element or text within the Highlight component will have a different selection color and background color when the user selects the text.

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

- If you want to get just the color or background color you may pass an empty prop or just pass it in false or 0. the class will still be included in the dom but that shouldnt cause any issue at all. I am working on adding more supports and functionality to this package as we speak.
