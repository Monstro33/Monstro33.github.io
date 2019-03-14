$(document).ready(function() {
//$('.tm-bg').ripples('show');
try {
    $('.img-fluid').ripples({
        resolution: 256,
        perturbance: 0.04
    });
}
catch (e) {
    $('.error').show().text(e);
}
});