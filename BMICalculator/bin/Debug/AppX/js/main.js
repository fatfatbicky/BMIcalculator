(function() {
    'use strict';
    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll().then(function() {
                // TODO: Your code here.
                var btnReset = document.getElementById('btnReset');
                btnReset.addEventListener("click", resetInputs, false);
                var btnCalc = document.getElementById('btnCalc');
                btnCalc.addEventListener("click", calcBMI, false);
            }));
        }
    };
    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state that needs to persist across suspensions here.
        // You might use the WinJS.Application.sessionState object, which is automatically saved and restored across suspension.
        // If you need to complete an asynchronous operation before your application is suspended, call args.setPromise().
        };
    function resetInputs(eventInfo) {
        document.getElementById("txtHeight").value = "";
        document.getElementById("txtWeight").value = "";
        document.getElementById("tdBMI").innerHTML = "";
        document.getElementById("tdcom").innerHTML = "";
    };

    function calcBMI(eventInfo) {
            var height = document.getElementById("txtHeight").value;
            var weight = document.getElementById("txtWeight").value;
            var bmi01 = weight / (height * height);
            var bmi02 = bmi01.toFixed(2);
            document.getElementById("tdBMI").innerHTML = bmi02;
            if (bmi01 > 30) {
                document.getElementById("tdcom").innerHTML = "Too Fat!";
            }
            if (bmi01 > 25 && bmi01<30) {
                document.getElementById("tdcom").innerHTML = "Over!";
            }
            if (bmi01<25) {
                document.getElementById("tdcom").innerHTML = "OK!";
            }
        };
    
  app.start();
}());
