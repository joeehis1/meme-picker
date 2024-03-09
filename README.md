# Meme Picker

This is a small React exercise I built to practice using a CSS framework with React. It was constructed using the Bootstrap CSS framework and style manipulation with SCSS. The application is straightforward to use: you select an emotion from the presented options and choose whether to view an animated image or not. Below the options, there's a button that, when clicked, displays a modal containing an image corresponding to the selected option. The cat options are imported from a memeData.js file and are used to generate an options array, which is then utilized to render the radio buttons within a form. The useMemo hook is employed to dynamically set the value of the modal image each time the current emotion or "withAnimation" changes. Please review the implementation and share your thoughts.

## Files to Note

-   Context: emotionsContext.jsx contains the context used to pass the emotions array, as well as the current emotion state value and state setter function, from the top-level application down to the memeOptions form.

-   Components: I've created components for the radio buttons, each of which includes a significant amount of functionality. Each radio button is encapsulated within Emotion.jsx. These emotions are then rendered through EmotionSelector.jsx using a map function. Finally, MemeOptionsForm.jsx is responsible for collecting the data and generating a meme.

## Design Choices

-   Use of Context to Avoid Prop Drilling: Given that this project served as a learning exercise, I aimed to revisit fundamental React concepts. In this regard, I utilized context to wrap the meme options form, thereby circumventing the need for prop drilling of the emotions array and the current emotion state value.

-   Composition: I opted to split most (but not all) of the substantial tags into components. Whenever a portion of the rendered element appeared to be carrying out a significant amount of work, it signaled the need for encapsulation within its own component, rather than making everything a component.

## Contributions

I don't have any plans for further development on this project. As mentioned, it primarily served as a practice exercise. However, if you believe that my approach could be improved or if you spot any errors, please don't hesitate to reach out to me at 'joeehis1@gmail.com'. Feel free to include a snippet of the code where you believe improvements could be made, and I'll be happy to learn from any mistakes. Alternatively, you can submit a pull request, both approaches work for me.
