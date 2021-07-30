//柱状图参数
var mDataIndex = 0;//0是2019 ，1是2020


// 柱状图1模块
(function () {
  console.log("柱状图初始化");

  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  //存放所有数据的对象
  //使用const定义的变量不要修改他的值，改用let
  let dataJson = [];
  let dataNum = [];

  window.setInterval(()=>{
    $.ajax({
      url: "/bar1",
      type: "get",
      dataType: 'json',
      success: function(data){
        dataJson = data;
        dataNum = [
          { year: "2019", data: [dataJson[0].travel, dataJson[0].educate, dataJson[0].game, dataJson[0].medical, dataJson[0].ecommerce, dataJson[0].social,dataJson[0].finance] },
          { year: "2020", data: [dataJson[1].travel, dataJson[1].educate, dataJson[1].game, dataJson[1].medical, dataJson[1].ecommerce, dataJson[1].social,dataJson[1].finance] }
        ];
        option.series[0].data = dataNum[mDataIndex].data;
        myChart.setOption(option);
        //console.log("柱状图数据更新");
      },
      timeout: 2000,
      error: function(e){
          console.log(e);
      },
    });
  },300)
  

  // 指定配置和数据
  var option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: [
          "旅游",
          "教育",
          "游戏",
          "医疗",
          "电商",
          "社交",
          "金融"
        ],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
            // width: 1,
            // type: "solid"
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "直接访问",
        type: "bar",
        barWidth: "35%",
        //根据参数设定初始数值
        data: [2000,2000,2000,2000,2000,2000,2000],
        itemStyle: {
          barBorderRadius: 5
        }
      }
    ]
  };
  
  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
  myChart.resize();
  });

  //点击事件
  $(".bar h2").on("click", "a", function() {
    mDataIndex = $(this).index();
    option.series[0].data = dataNum[mDataIndex].data;
    myChart.setOption(option);
  });
})();

// 折线图定制
(function() {
  console.log("折线图初始化");
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(document.querySelector(".line .chart"));

  // (1)准备数据
  let mIndex = 0;
  let data = {
    year: [
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
    ]
  };

  window.setInterval(()=>{
    $.ajax({
      url: "/line1",
      type: "get",
      dataType: 'json',
      success: function(datares){
        if(mIndex <= 3 ){
          data.year[0] = Object.values(datares[mIndex]);
          if(mIndex === 3){
            data.year[1] = Object.values(datares[0]);
            mIndex = 0;
          }else{
            data.year[1] = Object.values(datares[mIndex+1]);
            mIndex++;
          }
        }

        option.series[0].data = data.year[0];
        option.series[1].data = data.year[1];
        myChart.setOption(option);
      },
      timeout: 2000,
      error: function(e){
        console.log(e);
      },
    });
  },2000)

  // 2. 指定配置和数据
  const option = {
    color: ["#00f2f1", "#ed3f35"],
    tooltip: {
      // 通过坐标轴来触发
      trigger: "axis"
    },
    legend: {
      // 距离容器10%
      right: "10%",
      // 修饰图例文字的颜色
      textStyle: {
        color: "#4c9bfd"
      }
      // 如果series 里面设置了name，此时图例组件的data可以省略
      // data: ["邮件营销", "联盟广告"]
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true,
      borderColor: "#012f4a",
      containLabel: true
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ],
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "rgba(255,255,255,.7)"
      },
      // 去除x坐标轴的颜色
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: "value",
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "rgba(255,255,255,.7)"
      },
      // 修改y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [
      {
        name: "数据变化",
        type: "line",
        stack: "总量",
        // 是否让线条圆滑显示
        smooth: true,
        data: data.year[0]
      },
      {
        name: "新增游客",
        type: "line",
        stack: "总量",
        smooth: true,
        data: data.year[1]
      }
    ]
  };

  // 3. 把配置和数据给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 饼形图定制
(function() {
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(document.querySelector(".pie .chart"));
  let mIndex = 0;

  window.setInterval(()=>{
    $.ajax({
      url: "/pie1",
      type: "get",
      dataType: 'json',
      success: function(datares){
        if(mIndex === 3) mIndex = 0;
        let data = Object.values(datares[mIndex]);
        for (let i=0; i<5 ; i++){
          option.series[0].data[i].value = data[i];
        }
        mIndex++;
        myChart.setOption(option);
      },
      timeout: 2000,
      error: function(e){
        console.log(e);
      },
    });
  },2000)

  let option = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
      position: function (p) {
        //其中p为当前鼠标的位置
        return [p[0] + 10, p[1] - 10];
      }
    },
    legend: {
      top: "90%",
      itemWidth: 10,
      itemHeight: 10,
      data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: "年龄分布",
        type: "pie",
        center: ["50%", "42%"],
        radius: ["40%", "60%"],
        color: [
          "#0c6ab6",
          "#631d8c",
          "#bb1551",
          "#20b262",
          "#a1874d",
          "#1ebeb5",
          "#83cb8c",
          "#571414",
          "#06f0ab"
        ],
        label: {show: false},
        labelLine: {show: false},
        data: [
          {value: 1, name: "0岁以下"},
          {value: 4, name: "20-29岁"},
          {value: 2, name: "30-39岁"},
          {value: 2, name: "40-49岁"},
          {value: 1, name: "50岁以上"}
        ]
      }
    ]
  };
  myChart.setOption(option);
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 学习进度柱状图模块
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));


  const titleName = ["HTML5", "CSS3", "javascript", "VUE", "NODE"];
  const myColor = ["#26cd2e", "#b42222", "#56D0E3", "#F8B448", "#8B78F6"];
  let data = [50, 50, 50, 50, 50];
  let valData = [703, 666, 845, 423, 222];
  let mIndex = 0;

  window.setInterval(()=>{
    $.ajax({
      url: "/bar2",
      type: "get",
      dataType: 'json',
      success: function(datares){
        if(mIndex === 5) mIndex = 0;
        option.series[0].data = Object.values(datares[mIndex]);
        mIndex++;
        myChart.setOption(option);
      },
      timeout: 2000,
      error: function(e){
        console.log(e);
      },
    });
  },800)

  let option = {
    //图标位置
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%"
    },
    xAxis: {
      show: false
    },
    yAxis: [
        //关于双y轴，默认 grid 中的第一个 y 轴在 grid 的左侧（'left'），第二个 y 轴视第一个 y 轴的位置放在另一侧。
        //第一个y轴
      {
        show: true,
        //显示名称
        data: titleName,
        //如果不写类型，默认根据数据↑进行类型分配
        type: 'category',
        inverse: true,
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#fff",

          rich: {
            lg: {
              backgroundColor: "#339911",
              color: "#fff",
              borderRadius: 15,
              // padding: 5,
              align: "center",
              width: 15,
              height: 15
            }
          }
        }
      },
        //第二个y轴valDate
      {
        show: true,
        inverse: true,
        data: valData,
        type: "category",
        axisLabel: {
          textStyle: {
            fontSize: 12,
            color: "#fff"
          },
        },
        //轴线不显示
        axisLine: {
          show: false
        },
        //刻度线不显示
        axisTick: {
          show: false
        }
      }
    ],
    series: [
        //data
      {
        name: "条",
        type: "bar",
        yAxisIndex: 0,
        data: data,
        barCategoryGap: 50,
        barWidth: 10,
        itemStyle: {
          normal: {
            barBorderRadius: 20,
            color: function(params) {
              const num = myColor.length;
              return myColor[params.dataIndex % num];
            }
          }
        },
        label: {
          normal: {
            show: true,
            position: "inside",
            formatter: "{c}%"
          }
        }
      },
      {
        name: "框",
        type: "bar",
        yAxisIndex: 1,
        barCategoryGap: 50,
        data: [100, 100, 100, 100, 100],
        barWidth: 15,
        itemStyle: {
          normal: {
            color: "none",
            borderColor: "#00c1de",
            borderWidth: 3,
            barBorderRadius: 15
          }
        }
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
// 折线图 优秀作品
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line1 .chart"));

  let mIndex = 0;

  window.setInterval(()=>{
    $.ajax({
      url: "/line2",
      type: "get",
      dataType: 'json',
      success: function(datares){
        let data = Object.values(datares);
        option.series[0].data = Object.values(datares[mIndex]);
        if(mIndex === 2){
          option.series[1].data = Object.values(datares[0]);
          mIndex = 0;
        }else{
          option.series[1].data = Object.values(datares[mIndex+1]);
          mIndex++;
        }

        myChart.setOption(option);
      },
      timeout: 2000,
      error: function(e){
        console.log(e);
      },
    });
  },2000)

  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          color: "#dddc6b"
        }
      }
    },
    legend: {
      top: "0%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true
    },

    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        },

        data: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30"
        ]
      },
      {
        axisPointer: {show: false},
        axisLine: {show: false},
        position: "bottom",
        offset: 20
      }
    ],

    yAxis: [
      {
        type: "value",
        axisTick: {show: false},
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },

        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "播放量",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#0184d5",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(1, 132, 213, 0.4)"
                  },
                  {
                    offset: 0.8,
                    color: "rgba(1, 132, 213, 0.1)"
                  }
                ],
                false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#0184d5",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data: [
          30,
          40,
          30,
          40,
          30,
          40,
          30,
          60,
          20,
          40,
          20,
          40,
          30,
          40,
          30,
          40,
          30,
          40,
          30,
          60,
          20,
          40,
          20,
          40,
          30,
          60,
          20,
          40,
          20,
          40
        ]
      },
      {
        name: "转发量",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(0, 216, 135, 0.4)"
                  },
                  {
                    offset: 0.8,
                    color: "rgba(0, 216, 135, 0.1)"
                  }
                ],
                false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#00d887",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data: [
          50,
          30,
          50,
          60,
          10,
          50,
          30,
          50,
          60,
          40,
          60,
          40,
          80,
          30,
          50,
          60,
          10,
          50,
          30,
          70,
          20,
          50,
          10,
          40,
          50,
          30,
          70,
          20,
          50,
          10,
          40
        ]
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 点位分布统计模块
(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie1  .chart"));
  // 2. 指定配置项和数据
  var option = {
    legend: {
      top: "90%",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    // 注意颜色写的位置
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff"
    ],
    series: [
      {
        name: "点位统计",
        type: "pie",
        // 如果radius是百分比则必须加引号
        radius: ["10%", "70%"],
        center: ["50%", "42%"],
        roseType: "radius",
        data: [
          { value: 20, name: "云南" },
          { value: 26, name: "北京" },
          { value: 24, name: "山东" },
          { value: 25, name: "河北" },
          { value: 20, name: "江苏" },
          { value: 25, name: "浙江" },
          { value: 30, name: "深圳" },
          { value: 42, name: "广东" }
        ],
        // 修饰饼形图文字相关的样式 label对象
        label: {
          fontSize: 10
        },
        // 修饰引导线样式
        labelLine: {
          // 连接到图形的线长度
          length: 10,
          // 连接到文字的线长度
          length2: 10
        }
      }
    ]
  };

  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();
