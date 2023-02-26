<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>
    <?php
    $result = array("asif"=>"3.92", "sakib"=>"3.75", "Jacky"=>"3.80");
    $name="Jacky";
        echo "Hello $name<br>\n";
        // echo "date is:". date('j-m-y,h:i:s');
        echo "<br>".$result[$name];
    ?>
    </p>

    <form action="sub.php" method="post">
        NID <input type="number" name="nid"><br>
        Birth Decription:
        BDay <input type="number" name="bday"><br>
        BMonth & BYear<input type="month" id="bdaymonth" name="bdaymonth">
        <input type="submit">
    </form>
    
    
</body>
</html>