<!DOCTYPE html>

<?php include ('loader.php'); ?>

<html>
    <head>
        <title>Parking Services-Ticket Management</title>
        <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="stylesheet.css" rel="stylesheet">
    </head>
    <body id="ticket" onload="ticketStart()">
        <p>Please choose which function you would like to use.</p>
        <button class="function-buttons" onclick="dropTutorial('1')">Add a ticket</button>
        <div class="hidden" id="1">
            <div class="format">
                <p>Please fill in all fields to add the new record in the database.</p>
                <form id="add-ticket" action="ticket_handle.php" method="POST">
                    <p><label>Employee information:</label></p>
                    <p>
                        <label>Campus:</label>
                        <select name="campus1" id="campus1">
                            <option value="">Choose a campus</option>
                            <?php
                                $sql = "SELECT campus_name FROM campus";
                                $result = $pdo->query($sql);

                                while($row = $result->fetch()){
                                    $name = $row['campus_name'].str_replace(" ", "_");
                                    echo "<option value='" . $name . "'>" . $name . "</option>";
                                }
                            ?>
                        </select>
                    </p>
                    <p>
                        <label>Parking lot:</label>
                        <select name="parking_lot1" id="parking-lots1">
                            <option value="">Choose a parking lot</option>
                            <?php
                                $sql = "SELECT name FROM parking_lot";
                                $result = $pdo->query($sql);

                                while($row = $result->fetch()){
                                    $name = $row['name'].str_replace(" ", "_");
                                    echo "<option value='" . $name . "'>" . $name . "</option>";
                                }
                            ?>
                        </select>
                    </p>
                    <p>
                        <label>Employee:</label>
                        <select name="employee1" id="employee1">
                            <option value="">Choose an employee</option>
                            <?php
                                $sql = "SELECT employee_id,first_name,last_name FROM parking_lot";
                                $result = $pdo->query($sql);

                                while($row = $result->fetch()){
                                    $name = $row['employee_id'].str_replace(" ", "_");
                                    echo "<option value='" . $name . "'>" . $name . "</option>";
                                }
                            ?>
                        </select>
                    </p>
                    <p><label>Ticket information:</label></p>
                    <p>
                        <label>Type:</label>
                        <select name="type1" id="type1">
                            <option value="">Choose a ticket type</option>
                        </select>
                    </p>
                    <p><label>Paid?</label><input name="paid1" type="checkbox"></p>
                    <p>
                        <label>Appeal code:</label>
                        <select name="appeal1" id="appeal1">
                                <option value="">Choose an appeal code</option>
                        </select>
                    </p>
                    <p><label>Date:</label><input name="date1" type="date1"></p>
                    <p><label>Time:</label><input name="time1" type="time1"></p>
                    <p><label>Vehicle information:</label></p>
                    <p><label>Unregistered vehicle?</label><input name="unregistered1" id="check1" onclick="addSelection('add1')" type="checkbox"></p>
                    <p id="add1"><label>License Number:</label><input name="license1" type="text" placeholder="License"></p>
                    <p><input type="submit" value="submit1"></p>
                </form>
            </div>
        </div>
        <button class="function-buttons" onclick="dropTutorial('2')">Find a ticket</button>
        <div class="hidden" id="2">
            <div class="div1" id="ticket1">
                <p>Please fill in all fields to find a match.</p>
                <form id="find-ticket" action="ticket_handle.php" method="POST">
                    <p><label>Employee information:</label></p>
                    <p>
                        <label>Campus:</label>
                        <select name="campus2" id="campus2">
                            <option value="">Choose a campus</option>
                            <?php
                                $sql = "SELECT campus_name FROM campus";
                                $result = $pdo->query($sql);

                                while($row = $result->fetch()){
                                    $name = $row['campus_name'].str_replace(" ", "_");
                                    echo "<option value='" . $name . "'>" . $name . "</option>";
                                }
                            ?>
                        </select>
                    </p>
                    <p>
                        <label>Parking lot:</label>
                        <select name="parking_lot2" id="parking-lots2">
                            <option value="">Choose a parking lot</option>
                            <?php
                                $sql = "SELECT name FROM parking_lot";
                                $result = $pdo->query($sql);

                                while($row = $result->fetch()){
                                    $name = $row['name'].str_replace(" ", "_");
                                    echo "<option value='" . $name . "'>" . $name . "</option>";
                                }
                            ?>
                    </p>
                    <p>
                        <label>Employee:</label>
                        <select name="employee2" id="employee2">
                                <option value="">Choose an employee</option>
                        </select>
                    </p>
                    <p><label>Ticket information:</label></p>
                    <p>
                        <label>Type:</label>
                        <select name="type2" id="type2">
                            <option value="">Choose a ticket type</option>
                        </select>
                    </p>
                    <p><label>Paid?</label><input name="paid2" type="checkbox"></p>
                    <p>
                        <label>Appeal code:</label>
                        <select name="appeal2" id="appeal2">
                                <option value="">Choose an appeal code</option>
                        </select>
                    </p>
                    <p><label>Date:</label><input name="date2" type="date2"></p>
                    <p><label>Time:</label><input name="time2" type="time2"></p>
                    <p><label>Vehicle information:</label></p>
                    <p><label>Unregistered vehicle?</label><input name="unregistered2" id="check2" onchange="addSelection('add2')" type="checkbox"></p>
                    <p id="add2"><label>License Number:</label><input name="license2" type="text" placeholder="License"></p>
                    <p><input type="submit" value="submit2"></p>
                </form>
            </div>
            <div class="div2" id="ticket2">
                <textarea id="text1"></textarea>
                <p>
                    <button>Edit Record</button>
                    <button>Remove Record</button>
                    <button>Cancel</button>
                    <button>Submit Changes</button>
                </p>
            </div>
        </div>
        <button class="function-buttons" onclick="dropTutorial('3')">Find tickets</button>
        <div class="hidden" id="3">
            <div class="div1" id="ticket3">
                <p>Please fill in the information that you would like the database to match.</p>
                <form id="multifind-ticket" action="ticket_handle.php" method="POST">
                    <p><label>Employee information:</label></p>
                    <p>
                        <label>Campus:</label>
                        <select name="campus3" id="campus3">
                            <option value="">Choose a campus</option>
                            <?php
                                $sql = "SELECT campus_name FROM campus";
                                $result = $pdo->query($sql);

                                while($row = $result->fetch()){
                                    $name = $row['campus_name'].str_replace(" ", "_");
                                    echo "<option value='" . $name . "'>" . $name . "</option>";
                                }
                            ?>
                        </select>
                    </p>
                    <p>
                        <label>Parking lot:</label>
                        <select name="parking_lot3" id="parking-lots3">
                            <option value="">Choose a parking lot</option>
                            <?php
                                $sql = "SELECT name FROM parking_lot";
                                $result = $pdo->query($sql);

                                while($row = $result->fetch()){
                                    $name = $row['name'].str_replace(" ", "_");
                                    echo "<option value='" . $name . "'>" . $name . "</option>";
                                }
                            ?>
                        </select>
                    </p>
                    <p>
                        <label>Employee:</label>
                        <select name="employee3" id="employee3">
                                <option value="">Choose an employee</option>
                        </select>
                    </p>
                    <p><label>Ticket information:</label></p>
                    <p>
                        <label>Type:</label>
                        <select name="type3" id="type3">
                            <option value="">Choose a ticket type</option>
                        </select>
                    </p>
                    <p><label>Paid?</label><input name="paid3" type="checkbox"></p>
                    <p>
                        <label>Appeal code:</label>
                        <select name="appeal3" id="appeal3">
                                <option value="">Choose an appeal code</option>
                        </select>
                    </p>
                    <p><label>Date:</label><input name="date3" type="date3"></p>
                    <p><label>Time:</label><input name="time3" type="time3"></p>
                    <p><label>Vehicle information:</label></p>
                    <p><label>Unregistered vehicle?</label><input name="unregistered3" id="check3" onchange="addSelection('add3')" type="checkbox"></p>
                    <p id="add3"><label>License Number:</label><input name="license3" type="text" placeholder="License"></p>
                    <p><input type="submit" value="submit3"></p>
                </form>
            </div>
            <div class="div2" id="ticket4">
                <textarea id="text2"></textarea>
            </div>
        </div>
        <script src="interface_script.js" type="text/javascript"></script>
    </body>
</html>