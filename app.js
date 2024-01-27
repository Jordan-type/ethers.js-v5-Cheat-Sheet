const express = require('express');
const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

app.set('views', './views');  // Specify the directory where the EJS templates are located
app.use(express.static('public')); // Serve static files from the 'public' directory

// routes go here
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
