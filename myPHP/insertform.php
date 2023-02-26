<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "test";

        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
        // Check connection
        if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
        }
        $name=$_POST['name'];
        $price=$_POST['price'];


        $sql = "INSERT INTO product (product_name,price) 
        VALUES ('$name', '$price')";

        if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
        } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
        }

        $conn->close();

    }
?>

