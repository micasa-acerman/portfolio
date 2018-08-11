    <?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    if (empty($_POST["name"]) or empty($_POST["email"]) or empty($_POST["comment"])) {
        return http_response_code(404);
    }

    $ip = "localhost";
    $user = "root";
    $pass = "";
    $db = "portfolio";
    $table = "comment";

    $dbh = new PDO("mysql:host=$ip;dbname=$db", $user, $pass);
$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
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