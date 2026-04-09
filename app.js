 function forwardCounting() {
            let num = document.getElementById("forwardNum").value;
            let result = "";

            for (let i = 1; i <= num; i++) {
                result += i + " ";
            }

            document.getElementById("forwardResult").innerText = result;
        }

        function backwardCounting() {
            let num = document.getElementById("backwardNum").value;
            let result = "";

            for (let i = num; i >= 1; i--) {
                result += i + " ";
            }

            document.getElementById("backwardResult").innerText = result;
        }

        function showTable() {
            let num = document.getElementById("tableNum").value;
            let result = "";

            for (let i = 1; i <= 10; i++) {
                result += num + " x " + i + " = " + (num * i) + "<br>";
            }

            document.getElementById("tableResult").innerHTML = result;
        }