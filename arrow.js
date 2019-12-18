const double1 = (number) => {
    return number * 2;
}
const double2 = (number) => number * 3
console.log(double1(2))
console.log(double2(2))
// ------------------------------------------------------------
// this 指向问题
const team1 = {
    members: ['henrry', 'elen'],
    teamName: 'es6',
    teamSummary: function () {
        //这时this还是指向team的
        return this.members.map(function (member) {
            //map函数后this就不是指向team而是window了, 因为map函数不是team1里的成员
            return `${member} 隶属 ${this.teamName}`;
        })
    }
}
console.log(team1.teamSummary())
// ------------------------------------------------------------that = this
const team2 = {
    members: ['henrry', 'elen'],
    teamName: 'es6',
    teamSummary: function () {
        //解决办法1: 在外部对this 进行保存
        let that = this;
        return this.members.map(function (member) {

            return `${member} 隶属 ${that.teamName}`;
        })
    }
}
console.log(team2.teamSummary())
// ------------------------------------------------------------bind(this)
const team3 = {
    members: ['henrry', 'elen'],
    teamName: 'es6',
    teamSummary: function () {
        return this.members.map(function (member) {
            return `${member} 隶属 ${this.teamName}`;
            //解决办法2: 用.bind(this)
        }.bind(this))
    }
}
console.log(team2.teamSummary())

// ------------------------------------------------------------
const team4 = {
    members: ['henrry', 'elen'],
    teamName: 'es6',
    teamSummary: function () {
        //解决办法3: 箭头函数，箭头函数不绑定this，而是指向使用箭头函数的位置
        return this.members.map((member) => {
            return `${member} 隶属 ${this.teamName}`;

        })
    }
}
console.log(team4.teamSummary())