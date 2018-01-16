<!DOCTYPE html>

<?php include ('loader.php'); ?>

<html>
    <head>
        <title>Parking Services-Vehicle Management</title>
        <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="stylesheet.css" rel="stylesheet">
        <script src="interface_script.js" type="text/javascript"></script>
    </head>
    <body onload="vehicleStart()">
        <p>Please select the function you would like to use.</p>
        <button class="function-buttons" onclick="dropTutorial('1')">Register a vehicle</button>
        <div class="hidden" id="1">
            <div class="format">
                <p>Please fill out all fields in the form below to register a vehicle.</p>
                <form id="register-vehicle" action="vehicle_handler.php" method="POST">
                    <p><label>License Number:</label><input name="license1" type="text" placeholder="License"></p>
                    <p><label>First Name:</label><input name="first1" type="text" placeholder="First Name"></p>
                    <p><label>Last Name:</label><input name="last1" type="text" placeholder="Last Name"></p>
                    <p><label>Vehicle Description:</label></p>
                    <p>
                        <select name="make1" class="makes" id="makes1" onchange="modelGenerator()">
                            <option value="">Choose an make</option>
                        </select>
                        <select name="model1" class="models" id="models1">
                            <option value="">Choose an model</option>
                        </select>
                        <select name="color1" id="colors">
                            <option value="">Choose an color</option>
                            <option value="blue">Blue</option>
                            <option value="black">Black</option>
                            <option value="silver">Silver</option>
                            <option value="white">White</option>
                            <option value="red">Red</option>
                            <option value="yellow">Yellow</option>
                        </select>
                    </p>
                    <p><label>Registered Date:</label><input name="register_date1" type="date"></p>
                    <p><input type="submit" value="submit1"></p>
                </form>
            </div>
        </div>
        <button class="function-buttons" onclick="dropTutorial('2')">Look up a vehicle</button>
        <div class="hidden" id="2">
            <div class="div1">
                <p>Please fill out the form below to find a specific vehicle.</p>
                <form id="lookup-vehicle" action="vehicle_handler.php" method="POST">
                    <p><label>License Number:</label><input name="license2" type="text" placeholder="License"></p>
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
        <button class="function-buttons" onclick="dropTutorial('3')">Look up multiple vehicles</button>
        <div class="hidden" id="3">
            <div class="div1">
                <p>Please fill out the fields you would like the database to match.</p>
                <form id="multilook-vehicle" action="vehicle_handler.php" method="POST">
                    <p><label>License Number:</label><input name="license3" type="text" placeholder="License"></p>
                    <p><label>First Name:</label><input name="first3" type="text" placeholder="First Name"></p>
                    <p><label>Last Name:</label><input name="last3" type="text" placeholder="Last Name"></p>
                    <p><label>Vehicle Description:</label></p>
                    <p>
                        <select name="make3" class="makes" id="makes2" onchange="modelGenerator()">
                            <option value="">Choose an make</option>
                        </select>
                        <select name="model3" class="models" id="models2">
                            <option value="">Choose an model</option>
                        </select>
                        <select name="color3" id="colors">
                            <option value="">Choose an color</option>
                            <option value="blue">Blue</option>
                            <option value="black">Black</option>
                            <option value="silver">Silver</option>
                            <option value="white">White</option>
                            <option value="red">Red</option>
                            <option value="yellow">Yellow</option>
                        </select>
                    </p>
                    <p><label>Registered Date:</label><input name="register_date3" type="date"></p>
                    <p><input type="submit" value="submit3"></p>
                </form>
            </div>
            <div class="div2">
                <textarea id="text2"></textarea>
            </div>
        </div>
    </body>
</html>