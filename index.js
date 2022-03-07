const express = required("express")
const app = express();

app.use(logger);
app.use(checkPermission);
app.get("/books",logger, (req, res) => {
    //console.log("books");
    return res.send({ route: "/books"});
});

app.get("/libraries",logger,checkPermission, (req, res) => {
    //console.log(libraries);
    return res.send({ route: "/libraries", permission: true});
});

app.get("/authors",logger,checkPermission, (req, res) => {
    //console.log(authors);
    return res.send({ route: "/authors", permission: true});
})

function logger(req, res ,nex1){
    console.log("fetching logger things");
    next1();
}
function checkPermission(req, res, next2){
    console.log("fetching Permission things")
    next2();
}

app.listen(5000, () => {
    console.log("this was shown in the live class on Friday");
})