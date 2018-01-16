 <?php
    try {
        $pdo = new PDO("mysql:host=localhost:3306;dbname=parking_services", "root", "root");

    } catch (PDOException $e) {
        die ($e->getMessage());
    }

    /////////////////////////////////////////////////////////////////////////////

    // $conn= mysqli_connect('127.0.0.1', 'root', 'password', 'parking_services');
    // if (!$conn) {
    //     echo "Failed to connect to database:" . mysqli_error($conn);
    // }
?>