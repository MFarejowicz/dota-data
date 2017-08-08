import React from "react"
import ScatterPlot from "replot-scatter"
import styles from "./Block.css"


class Earnings extends React.Component {

  render() {
    const data = [
      {ID: "UNiVeRsE", name: "Saahil Arora", earnings: 2826896, country: "USA", age: 27},
      {ID: "ppd", name: "Peter Dager", earnings: 2602008, country: "USA", age: 25},
      {ID: "SumaiL", name: "Sumail Hassan", earnings: 2507732, country: "Pakistan", age: 18},
      {ID: "Fear", name: "Clinton Loomis", earnings: 2381799, country: "USA", age: 29},
      {ID: "iceice", name: "Li Peng", earnings: 1998558, country: "China", age: 21},
      {ID: "bLink", name: "Zhou Yang", earnings: 1955008, country: "China", age: 24},
      {ID: "y`", name: "Zhang Yiping", earnings: 1955008, country: "China", age: 18},
      {ID: "Faith_bian", name: "Zhang Ruida", earnings: 1954948, country: "China", age: 19},
      {ID: "Shadow", name: "Chu Zeyu", earnings: 1954848, country: "China", age: 20},
      {ID: "Aui_2000", name: "Kurtis Ling", earnings: 1942859, country: "Canada", age: 24},
      {ID: "xiao8", name: "Ning Zhang", earnings: 1817094, country: "China", age: 27},
      {ID: "Hao", name: "Zhihao Chen", earnings: 1755205, country: "China", age: 26},
      {ID: "s4", name: "Gustav Magnusson", earnings: 1398696, country: "Sweden", age: 25},
      {ID: "Mu", name: "Zhang, Pan", earnings: 1386339, country: "China", age: 27},
      {ID: "Puppey", name: "Clement Ivanov", earnings: 1382106, country: "Estonia", age: 27},
      {ID: "MiSeRy", name: "Rasmus Fillipsen", earnings: 1364687, country: "Denmark", age: 26},
      {ID: "N0tail", name: "Johan Sundstein", earnings: 1283642, country: "Denmark", age: 23},
      {ID: "Zai", name: "Ludwig Wahlberg", earnings: 1276246, country: "Sweden", age: 19},
      {ID: "Banana", name: "Wang Jiao", earnings: 1267523, country: "China", age: 23},
      {ID: "Fly", name: "Tal Aizik", earnings: 1199824, country: "Israel", age: 24},
      {ID: "SanSheng", name: "Zhaohui Wang", earnings: 1198813, country: "China", age: 28},
      {ID: "w33", name: "Aliwi Omar", earnings: 1190278, country: "Romania", age: 22},
      {ID: "KuroKy", name: "Kuro Takhasomi", earnings: 1172128, country: "Germany", age: 24},
      {ID: "Fenrir", name: "Chao Lu", earnings: 1135954, country: "China", age: 28},
      {ID: "iceiceice", name: "Daryl Pei Xiang Koh", earnings: 1127603, country: "Singapore", age: 27},
      {ID: "MMY!", name: "Zengrong Lei", earnings: 1100227, country: "China", age: 27},
      {ID: "Arteezy", name: "Artour Babaev", earnings: 1085960, country: "Canada", age: 21},
      {ID: "fy", name: "Linsen Xu", earnings: 1034550, country: "China", age: 22},
      {ID: "Super", name: "Junhao Xie", earnings: 1018066, country: "China", age: 24},
      {ID: "Sylar", name: "Jiajun Liu", earnings: 1013771, country: "China", age: 23},
      {ID: "Resolut1on", name: "Roman Fominok", earnings: 989073, country: "Ukraine", age: 20},
      {ID: "LaNm", name: "Zhicheng Zhang", earnings: 933896, country: "China", age: 26},
      {ID: "JerAx", name: "Jesse Vainikka", earnings: 854408, country: "Finland", age: 25},
      {ID: "Cr1t", name: "Andreas Nielsen", earnings: 840816, country: "Denmark", age: 21},
      {ID: "Agressif", name: "Zheng Sun", earnings: 838031, country: "China", age: 25},
      {ID: "Saksa", name: "Martin Sazdov", earnings: 832306, country: "Macedonia", age: 22},
      {ID: "Q", name: "Bin Fu", earnings: 816562, country: "China", age: 21},
      {ID: "Yao", name: "Zhengzheng Yao", earnings: 815759, country: "China", age: 26},
      {ID: "EternaLEnVy", name: "Jacky Mao", earnings: 802697, country: "Canada", age: 26},
      {ID: "Maybe", name: "Lu Yao", earnings: 791755, country: "China", age: 21},
      {ID: "rOtK", name: "Fan Bai", earnings: 780647, country: "China", age: 25},
      {ID: "MoonMeander", name: "David Tan", earnings: 774872, country: "Canada", age: 25},
      {ID: "Mushi", name: "Yee Fung Chai", earnings: 774863, country: "Malaysia", age: 26},
      {ID: "Miracle", name: "Amer Barqawi", earnings: 768329, country: "Jordan", age: 20},
      {ID: "Faith", name: "Hongda Zeng", earnings: 729957, country: "China", age: 25},
      {ID: "Dendi", name: "Danil Ishutin", earnings: 729594, country: "Ukraine", age: 27},
      {ID: "Moo", name: "David Hull", earnings: 726640, country: "USA", age: 21},
      {ID: "ChuaN", name: "Hock Chuan Wong", earnings: 714049, country: "Malaysia", age: 25},
      {ID: "garder", name: "Xinzhou Liu", earnings: 705460, country: "China", age: 28},
      {ID: "pieliedie", name: "Johan Astrom", earnings: 701423, country: "Sweden", age: 24},
      {ID: "Loda", name: "Jonathan Berg", earnings: 694531, country: "Sweden", age: 29},
      {ID: "Xz", name: "Zezhi Chen", earnings: 692284, country: "China", age: 24},
      {ID: "DDC", name: "Fa Ming Liang", earnings: 689410, country: "Macao", age: 27},
      {ID: "EGM", name: "Jerry Lundqvist", earnings: 671794, country: "Sweden", age: 26},
      {ID: "Shiki", name: "Jiwei Huang", earnings: 651390, country: "China", age: 24},
      {ID: "XBOCT", name: "Oleksandr Dashkevych", earnings: 650363, country: "Ukraine", age: 26},
      {ID: "BurNIng", name: "Zhilei Xu", earnings: 642844, country: "China", age: 29},
      {ID: "Akke", name: "Joakim Akterhall", earnings: 639311, country: "Sweden", age: 29},
      {ID: "AdmiralBulldog", name: "Henrik Ahnberg", earnings: 630159, country: "Sweden", age: 26},
      {ID: "FATA", name: "Adrian Trinks", earnings: 579992, country: "Germany", age: 24},
      {ID: "QO", name: "Sunyeob Kim", earnings: 568179, country: "South Korea", age: 23},
      {ID: "Ferrari_430", name: "Feichi Luo", earnings: 554796, country: "China", age: 27},
      {ID: "Febby", name: "Kim, Yong Min", earnings: 539929, country: "South Korea", age: 24},
      {ID: "Ohaiyo", name: "Xin Khoo Chong", earnings: 538794, country: "Malaysia", age: 24},
      {ID: "Matumbaman", name: "Lasse Urpalainen", earnings: 533039, country: "Finland", age: 22},
      {ID: "MinD_ContRoL", name: "Ivan Ivanov", earnings: 528835, country: "Bulgaria", age: 22},
      {ID: "kpii", name: "Damien Chok", earnings: 525849, country: "Australia", age: 22},
      {ID: "Lil", name: "Ilya Ilyuk", earnings: 508652, country: "Ukraine", age: 21},
      {ID: "KaKa", name: "Zhi Hu", earnings: 502542, country: "China", age: 24},
      {ID: "ana", name: "Anathan Pham", earnings: 481299, country: "Australia", age: 17},
      {ID: "DJ", name: "Djardel Jicko Mampusti", earnings: 477521, country: "Philippines", age: 22},
      {ID: "MP", name: "Noah Pyo", earnings: 447633, country: "South Korea", age: 27},
      {ID: "MidOne", name: "Zheng Yeik Nai", earnings: 446248, country: "Malaysia", age: 28},
      {ID: "Forev", name: "Sang Don Lee", earnings: 423087, country: "South Korea", age: 25},
      {ID: "YYF", name: "Cen Jiang", earnings: 417377, country: "China", age: 30},
      {ID: "Funn1k", name: "Gleb Lipatnikov", earnings: 400409, country: "Ukraine", age: 28},
      {ID: "GoD", name: "Sergey Bragin", earnings: 395022, country: "Russia", age: 25},
      {ID: "END", name: "Yang Pu", earnings: 394600, country: "China", age: 28},
      {ID: "fng", name: "Artem Barshack", earnings: 392584, country: "Belarus", age: 21},
      {ID: "DuBu", name: "Kim, Du Young", earnings: 369666, country: "South Korea", age: 24},
      {ID: "DkPhobos", name: "Alexander Kucheria", earnings: 363162, country: "Ukraine", age: 27},
      {ID: "Cty", name: "Chen, Tianyu", earnings: 361116, country: "China", age: 22},
      {ID: "343", name: "Adam Shah", earnings: 358658, country: "Malaysia", age: 26},
      {ID: "eLeVeN", name: "Ren Yangwei", earnings: 355769, country: "China", age: 21},
      {ID: "Illidan", name: "Ilya Pevcaev", earnings: 349432, country: "Russia", age: 25},
      {ID: "oldchicken", name: "Zhiyong, Wang", earnings: 343658, country: "China", age: 24},
      {ID: "ArtStyle", name: "Ivan Antonov", earnings: 326228, country: "Ukraine", age: 26},
      {ID: "bOne7", name: "Pittner Armand", earnings: 324333, country: "Romania", age: 26},
      {ID: "KuKU", name: "Kuku Palad", earnings: 309355, country: "Philippines", age: 20},
      {ID: "sam_H", name: "Sam Enojosa Hidalgo", earnings: 300522, country: "Philippines", age: 22},
      {ID: "Xi", name: "Yinqi Luo", earnings: 296360, country: "China", age: 26},
      {ID: "Raven", name: "Marc Polo Luis Fausto", earnings: 295681, country: "Philippines", age: 18},
      {ID: "Rabbit", name: "Zhang, Wang", earnings: 270410, country: "China", age: 25},
      {ID: "LighTofHeaveN", name: "Dmitriy Kupriyanov", earnings: 268719, country: "Russia", age: 29},
      {ID: "Zhou", name: "Yao Chen", earnings: 259126, country: "China", age: 27},
      {ID: "Solo", name: "Alexei Berezin", earnings: 251936, country: "Russia", age: 26},
      {ID: "mason", name: "Mason Venne", earnings: 249361, country: "USA", age: 25},
      {ID: "Ryo", name: "Ryo Hasegawa", earnings: 248383, country: "Philippines", age: 24},
      {ID: "Black^", name: "Dominik Reitmeier", earnings: 234828, country: "Germany", age: 24},
      {ID: "Noone", name: "Vladimir Minenko", earnings: 232458, country: "Ukraine", age: 18}
    ]
    const colorPalette = [
      "#d8bc32"
    ]

    return (
      <div className={styles.container}>
        <div className={styles.leftBlock}>
          <ScatterPlot
            width="100%"
            data={data}
            xKey="age"
            yKey="earnings"
            graphTitle="Scatter Plot of Earnings vs Age"
            xTitle="Player Age"
            yTitle="Player Earnings ($)"
            yScale="lin"
            yStart="origin"
            color={colorPalette}
            axisStyle={{
              axisColor: "#979797",
              labelColor: "#979797",
              titleColor: "#979797",
              gridColor: "#DDDDDD",
              lineWidth: 2,
              lineOpacity: 1
            }}
            legendStyle={{
              fontColor: "#979797",
              showBorder: false
            }}/>
        </div>
        <div className={styles.rightBlock}>
          Something about earnings here
        </div>
      </div>
    )
  }
}

export default Earnings
