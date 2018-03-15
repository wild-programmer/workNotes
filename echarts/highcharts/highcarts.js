function highcharSelect() {
    this.argument = {
        /* 默认参数配置项 */
        type: "line",
        xAxis: {
            categories: ['至善基金总部', '中时集团', '中时投资', '至善基金', '扬凯投资', '至善保险经纪',
                '华华集团', '至善资产', '钱进家', '康乐旅行社', '扬凯资产', '棋至文化'
            ]
        },
        yAxis: {
            title: '单位：人',
        },
        title: {
            text: '',
        },
        series: {
            /* 传递数据的格式模板 */
            line: [{
                type: 'pie',
                name: '在职人数',
                data: [
                    ['至善基金总部', 26.8],
                    ['华华集团', 45.0],
                    ['中时集团', 8.5],
                    ['至善资产', 6.2],
                    ['中时投资', 0.7],
                    ['钱进家', 0.7],
                    ['至善基金', 0.7],
                    ['康乐旅行社', 0.7],
                    ['扬凯投资', 0.7],
                    ['至善保险经纪', 0.7],
                    ['棋至文化', 0.7],
                ]
            }],
            area: [{
                name: '小潘',
                color: '#60C84C',
                data: [1, 0, 3, 5, 3, 1, 2, 1]
            }, {
                name: '小张',
                color: '#FFC23F',
                fillColor: { // 设置渐变的填充颜色
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[6]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[6]).setOpacity(0).get('rgba')]
                    ]
                },
                data: [0, 1, 4, 4, 5, 2, 3, 7]
            }],
            pie: [{
                type: 'pie',
                name: '在职人数',
                data: [
                    ['至善基金总部', 26.8],
                    ['华华集团', 45.0],
                    ['中时集团', 8.5],
                    ['至善资产', 6.2],
                    ['中时投资', 0.7],
                    ['钱进家', 0.7],
                    ['至善基金', 0.7],
                    ['康乐旅行社', 0.7],
                    ['扬凯投资', 0.7],
                    ['至善保险经纪', 0.7],
                    ['棋至文化', 0.7],
                ]
            }],
            column: [{

                name: '全日制本科',
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
            }, {
                name: '民办本科',
                data: [48.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
            }]
        }
    };
    this.option = {
        tooltip: {
            area: {
                shared: false,
                valueSuffix: '万',
                backgroundColor: 'rgba(0,0,0,.6)',
                borderWidth: 0,
                style: {
                    "color ": "#ffffff ",
                    "cursor ": "pointer ",
                    "fontSize ": "14px ",
                },
                headerFormat: '',
                pointFormat: '<span style="color:{point.color} ">\u25CF</span>  <b>{point.y}</b><br/>',
                padding: 8,
                crosshairs: {
                    width: 1,
                    color: 'gray',
                    dashStyle: 'shortdot'
                }
            },
            line: {
                crosshairs: true,
                shared: true,
                useHTML: true,
                borderWidth: 0,
                style: {
                    "color ": '#7B8591',
                    "cursor ": "pointer ",
                    "fontSize ": "12px ",
                },
                headerFormat: '<span style="font-size: 10px;font-size: 12px;color: #556677; ">{point.key}</span><br/>',
                pointFormat: '<span style="color:{point.color}; ">\u25CF</span> <span style="display: inline-block;min-width:65px ">{series.name}:</span> <b >{point.y}</b><br/>',

            },
            pie: {
                headerFormat: '<span style="font-size: 12px;color: #556677;">{point.key}</span><table>',
                pointFormat: '<tr style="font-size: 12px;color: #7B8591;"><td style="color:{series.color};padding:0"><span style="color:{point.color} ">\u25CF</span> {series.name}: </td>' +
                    '<td style="padding:0;font-size: 12px;color: #556677;"><b>{point.y:.1f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            column: {
                headerFormat: '<span style="font-size: 12px;color: #556677;">{point.key}</span><table>',
                pointFormat: '<tr style="font-size: 12px;color: #7B8591;"><td style="color:{series.color};padding:0"><span style="color:{point.color} ">\u25CF</span> {series.name}: </td>' +
                    '<td style="padding:0;font-size: 12px;color: #556677;"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            }
        },
        legend: {
            also: {
                align: 'left',
                verticalAlign: 'top',
                layout: 'horizontal', //图例水平放置
                itemDistance: 20, //图例之间的间距
                x: 100,
                y: 50, //图例的y轴平移距离
                navigation: {
                    activeColor: '#3E576F',
                    animation: true,
                    arrowSize: 12,
                    inactiveColor: '#CCC',
                    style: {
                        fontWeight: 'bold',
                        color: '#333',
                        fontSize: '12px',
                        type: 'pie'
                    }
                }
            },
            pie: {
                align: 'right', //图例在图表区中的水平对齐方式，
                verticalAlign: 'middle', //图例在图表区中的垂直对齐方式
                layout: 'vertical', //图例水平放置
                itemDistance: 100, //图例之间的间距
                squareSymbol: true,
                margin: 10,
                x: -150,
                y: 10, //图例的y轴平移距离
                navigation: {
                    activeColor: '#3E576F',
                    animation: true,
                    arrowSize: 12,
                    inactiveColor: '#CCC',
                    style: {
                        fontWeight: 'bold',
                        color: '#333',
                        fontSize: '12px',
                        type: 'pie'
                    }
                }
            }
        },
        plotOptions: {
            line: {
                fillOpacity: 0, // 指定所有面积图的透明度 
            },
            area: {
                fillOpacity: 0.3, // 指定所有面积图的透明度 
            },
            column: {
                borderWidth: 0
            },
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        chart: {
            area: {
                type: "area",
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            pie: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            column: {
                type: 'column'
            },
            line: {
                type: 'line'
            }
        }
    }
    this.line = function(el, argument) {
            var type = argument.type || this.argument.type
            $(el).highcharts({
                colors: ['#60C84C', '#FF6563', '#FFC23F', '#39527B'],
                chart: this.option.chart[type],
                title: argument.title || this.argument.title,
                subtitle: {
                    text: ' '
                },
                yAxis: {
                    title: {
                        text: argument.yAxis || this.argument.yAxis.title,
                        rotation: 0,
                        offset: 0,
                        align: 'high',
                        y: -20,
                        x: 0
                    }
                },
                xAxis: argument.xAxis || this.argument.xAxis,
                legend: this.option.legend[type] || this.option.legend.also,

                credits: {
                    enabled: false //隐藏heigchatslogo
                },

                tooltip: this.option.tooltip[type],
                plotOptions: {
                    [type]: this.option.plotOptions[type]
                },
                series: argument.data || this.argument.series[type],
                navigation: {
                    menuItemStyle: {
                        borderLeft: '20px solid #E0E0E0'
                    },
                    menuItemHoverStyle: {
                        fontWeight: 'bold',
                        background: 'none',
                        color: 'black'
                    }
                },
                responsive: { //不清楚的配置
                    rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            legend: {
                                layout: 'horizontal',
                                align: 'center',
                                verticalAlign: 'bottom'
                            }
                        }
                    }]
                }
            })
        }
        /* 折线面积图 */
}