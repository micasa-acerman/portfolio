    <?php
    if (empty($_POST["name"]) or empty($_POST["email"]) or empty($_POST["comment"])) {
        return http_response_code(404);
    }

    $ip = "localhost";
    $user = "ce69789_portfoli";
    $pass = "UBea9wug";
    $db = "portfolio";
    $table = "comment";

    $dbh = new PDO("mysql:host=$ip;dbname=$db", $user, $pass);
    $stmt = $dbh->prepare("INSERT INTO $table (name, email, comment, ip, agent) VALUES (?, ?,?,?,?)");
    $stmt->bindParam(1, $name);
    $stmt->bindParam(2, $email);
    $stmt->bindParam(3, $comment);
    $stmt->bindParam(4, $ip);
    $stmt->bindParam(5, $agent);
    $name = $_POST["name"];
    $email = $_POST["email"];
    $comment = $_POST["comment"];
    $agent = $_SERVER['HTTP_USER_AGENT'];
    $ip = $_SERVER['REMOTE_ADDR'];
    $stmt->execute();