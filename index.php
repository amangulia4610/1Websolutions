<?php
// Check the user agent to determine the device type
$userAgent = $_SERVER['HTTP_USER_AGENT'];

if (strpos($userAgent, 'Mobile') !== false) {
    // If the user agent contains "Mobile," it's likely a mobile device
    $isMobile = true;
} else {
    $isMobile = false;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>1 Web Solutions</title>
    <link rel="stylesheet" href="<?php echo $isMobile ? 'mobile.css' : 'desktop.css'; ?>">
</head>
<body>
    <?php
    if ($isMobile) {
        // Include mobile-specific HTML file
        include 'mobile.html';
    } else {
        // Include desktop-specific HTML file
        include 'desktop.html';
    }
    ?>

    <script src="<?php echo $isMobile ? 'mobile.js' : 'desktop.js'; ?>"></script>
</body>
</html>
