(function($) {
    "use strict";

    function Dashboard() {
        this.$body = $("body");
        this.charts = [];
    }

    Dashboard.prototype.initCharts = function() {
        window.Apex = {
            chart: {
                parentHeightOffset: 0,
                toolbar: { show: false }
            },
            grid: { padding: { left: 0, right: 0 } },
            colors: ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"]
        };

        // Revenue Chart
        var revenueColors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
        var revenueOptions = {
            chart: {
                height: 370,
                type: "line",
                dropShadow: {
                    enabled: true,
                    opacity: .2,
                    blur: 7,
                    left: -7,
                    top: 7
                }
            },
            // 其他配置项...
        };
        this.charts.push(new ApexCharts(document.querySelector("#revenue-chart"), revenueOptions).render());

        // High Performing Product
        var productColors = ["#727cf5", "#e3eaef"];
        var productOptions = {
            chart: { height: 256, type: "bar", stacked: true },
            // 其他配置项...
        };
        this.charts.push(new ApexCharts(document.querySelector("#high-performing-product"), productOptions).render());

        // Average Sales
        var salesColors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
        var salesOptions = {
            chart: { height: 202, type: "donut" },
            // 其他配置项...
        };
        this.charts.push(new ApexCharts(document.querySelector("#average-sales"), salesOptions).render());
    };

    Dashboard.prototype.initMaps = function() {
        // 初始化地图
        new jsVectorMap({
            // 地图配置...
        });
    };

    Dashboard.prototype.init = function() {
        // 初始化日期范围选择器
        $("#dash-daterange").daterangepicker({ singleDatePicker: true });

        // 初始化图表和地图
        this.initCharts();
        this.initMaps();
    };

    // 初始化 Dashboard
    $.Dashboard = new Dashboard();
    $.Dashboard.Constructor = Dashboard;
})(window.jQuery);

// 页面加载完成后执行初始化操作
(function($) {
    "use strict";
    $(document).ready(function() {
        $.Dashboard.init();
    });
})(window.jQuery);
