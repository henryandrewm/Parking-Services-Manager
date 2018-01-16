<!DOCTYPE html>

<?php include ('loader.php'); ?>

<html>
    <head>
        <title>Parking Services-Employee Management</title>
        <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="stylesheet.css" rel="stylesheet">
    </head>
    <body>
        <p>Please choose which function you would like to use.</p>
        <button class="function-buttons" onclick="dropTutorial('1')">Add an employee</button>
        <div class="hidden" id="1">
            <div class="format">
                <p>Please fill in all fields to add the new record in the database.</p>
                <form id="add-employee" action="employee_handle.php" method="POST">
                    <p><label>First name:</label><input name="first1" type="text" placeholder="First Name"></p>
                    <p><label>Last name:</label><input name="last1" type="text" placeholder="Last Name"></p>
                    <p><label>Hours:</label><input name="hours1" type="number" min="1" max="70"></p>
                    <p>
                        <label>Campus:</label>
                        <select name="campus1" id="campuses1">
                            <option value="">Choose a campus</option>
                            <?php
                                $sql = "SELECT campus_name FROM campus";
                                $result = $pdo->query($sql);

                                while($row = $result->fetch()){
                                    $name = $row['name'].str_replace(" ", "_");
                                    echo "<option value='" . $name . "'>" . $name . "</option>";
                                }
                            ?>
                        </select>
                    </p>
                    <p><label>Starting date:</label><input name="start_date1" type="date"></p>
                    <p><label>Ending date:</label><input name="end_date1" type="date"></p>
                    <p><input type="submit" value="submit1"></p>
                </form>
            </div>
        </div>
        <button class="function-buttons" onclick="dropTutorial('2')">Find an employee</button>
        <div class="hidden" id="2">
            <div class="div1">
                <p>Please fill in all fields to find a match.</p>
                <form id="find-employee" action="employee_handle.php" method="POST">
                    <p><label>First name:</label><input name="first2" type="text" placeholder="First Name"></p>
                    <p><label>Last name:</label><input name="last2" type="text" placeholder="Last Name"></p>
                    <p><label>Hours:</label><input name="hours2" type="number" min="1" max="70"></p>
                    <p>Or by campus:</p>
                    <p>
                        <label>Campus:</label>
                        <select name="campus2" id="campuses2">
                            <option value="">Choose a campus</option>
                            <?php
                                $sql = "SELECT campus_name FROM campus";
                                $result = $pdo->query($sql);

                                while($row = $result->fetch()){
                                    $name = $row['name'].str_replace(" ", "_");
                                    echo "<option value='" . $name . "'>" . $name . "</option>";
                                }
                            ?>
                        </select>
                    </p>
                    <p>Or by start and end dates:</p>
                    <p><label>Starting date:</label><input name="start_date2" type="date"></p>
                    <p><label>Ending date:</label><input name="end_date2" type="date"></p>
                    <p><input type="submit" value="submit2"></p>
                </form>
            </div>
            <div class="div2">
                <textarea id="text1"></textarea>
                <p>
                    <button>Edit Record</button>
                    <button>Remove Record</button>
                    <button>Cancel</button>
                    <button>Submit Changes</button>
                </p>
            </div>
        </div>
        <button class="function-buttons" onclick="dropTutorial('3')">Find employees</button>
        <div class="hidden" id="3">
            <div class="div1">
                <p>Please fill in the information that you would like the database to match.</p>
                <form id="multifind-employee" action="employee_handle.php" method="POST">
                    <p><label>First name:</label><input name="first3" type="text" placeholder="First Name"></p>
                    <p><label>Last name:</label><input name="last3" type="text" placeholder="Last Name"></p>
                    <p><label>Hours:</label><input name="hours3" type="number" min="1" max="70"></p>
                    <p>Or by campus:</p>
                    <p>
                        <label>Campus:</label>
                        <select name="campus3" id="campuses3">
                            <option value="">Choose a campus</option>
                            <?php
                                $sql = "SELECT campus_name FROM campus";
                                $result = $pdo->query($sql);

                                while($row = $result->fetch()){
                                    $name = $row['name'].str_replace(" ", "_");
                                    echo "<option value='" . $name . "'>" . $name . "</option>";
                                }
                            ?>
                        </select>
                    </p>
                    <p>Or by start and end dates:</p>
                    <p><label>Starting date:</label><input name="start_date3" type="date"></p>
                    <p><label>Ending date:</label><input name="end_date3" type="date"></p>
                    <p><input type="submit" value="submit3"></p>
                </form>
            </div>
            <div class="div2">
                <textarea id="text2"></textarea>
            </div>
        </div>
        <script src="interface_script.js" type="text/javascript"></script>
    </body>
</html>