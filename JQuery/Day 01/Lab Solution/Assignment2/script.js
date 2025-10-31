$(document).ready(function () {

    $("#searhing").click(function () {
        $.ajax({
        url:'https://dummyjson.com/users',
        method:'GET',
        dataType:'json',
        success: function (data) {
            filtered = data.users.filter(function (elm) {
                return elm.id == $("#search-label").val();
            })

            if (filtered.length != 0) {

                $("#user-data").empty();
                filtered.forEach(function (elm) {
                userData = $("<p></p>").html(`
                    ID: ${elm.id} <br />
                    First Name: ${elm.firstName} <br />
                    Last Name: ${elm.lastName} <br />
                    Image: <img src="${elm.image}"> <br />
                    <hr />`);
                $("#user-data").append(userData);
            });
            }
        }
        })
    })

    $("#all-users").click(function () {
        $.ajax({
        url:'https://dummyjson.com/users',
        method:'GET',
        dataType:'json',
        success: function (data) {
            
            $("#user-data").empty();
            data.users.forEach(function (elm) {
                userData = $("<p></p>").html(`
                    ID: ${elm.id} <br />
                    First Name: ${elm.firstName} <br />
                    Last Name: ${elm.lastName} <br />
                    Image: <img src="${elm.image}"> <br />
                    <hr />`);
                $("#user-data").append(userData);
            })
            }
        })
    })
})

// $(document).ready(function () {

//     $("#searhing").click(function () {
//         $.ajax({
//         url:'https://reqres.in/api/users',
//         method:'GET',
//         dataType:'json',
//             success: function (data) {
//             console.log(data);
//             // filtered = data.users.filter(function (elm) {
//             //     return elm.id == $("#search-label").val();
//             // })

//             // filtered.forEach(function (elm) {
//             //     userData = $("<p></p>").html(`
//             //         ID: ${elm.id} <br />
//             //         First Name: ${elm.firstName} <br />
//             //         Last Name: ${elm.lastName} <br />
//             //         Image: <img src="${elm.image}"> <br />
//             //         <hr />`);
//             //     $("#user-data").append(userData);
//             // });
//             }
//         })
//     })

//     // $("#all-users").click(function () {
//     //     $.ajax({
//     //     url:'https://dummyjson.com/users',
//     //     method:'GET',
//     //     dataType:'json',
//     //     success: function (data) {
            
//     //         data.users.forEach(function (elm) {
//     //             userData = $("<p></p>").html(`
//     //                 ID: ${elm.id} <br />
//     //                 First Name: ${elm.firstName} <br />
//     //                 Last Name: ${elm.lastName} <br />
//     //                 Image: <img src="${elm.image}"> <br />
//     //                 <hr />`);
//     //             $("#user-data").append(userData);
//     //         })
//     //         }
//     //     })
//     // })
// })