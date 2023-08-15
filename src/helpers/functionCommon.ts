

export const StrTextChuanSpaceUpper = (strInput: string) => {
    let strTextChuan = strInput.trim();
    const numLength = strTextChuan.length;
    if (numLength > 0) {
        strTextChuan = strTextChuan[0].toUpperCase() + strTextChuan.substring(1);
        //   if (numLength > 1 && strTextChuan[numLength - 1] === strTextChuan[numLength - 2]
        //     && strTextChuan[numLength - 1] === " ") {
        //     strTextChuan = strTextChuan.trim() + " ";
        //   }

        strTextChuan = strTextChuan.replace(/  +/g, ' ');
    }
    return strTextChuan;
}

export const StrConvertNumberToCurrency = (nNumber: number, strBegin: string
    , strEnd: string, nSoKyTuThapPhan: number) => {
    //FractionDigits ký tự thập phân
    //Nếu số có phần thập phân thì để nSoKyTuThapPhan chữ số sau dấu thập phân
    if (nNumber % 1 === 0) {
        return strBegin + nNumber.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + strEnd;
    }

    let nMulti10 = 1;
    for (let i = 0; i < nSoKyTuThapPhan; i++) {
        if (i > nSoKyTuThapPhan) {
            return strBegin + nNumber.toFixed(nSoKyTuThapPhan).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + strEnd;
        }

        nMulti10 *= 10;
        // nMulti10 = math.multiply(nMulti10, 10);

        var temp = nNumber * nMulti10;
        // var temp = math.multiply(nNumber, nMulti10);
        if (temp % 1 === 0) {
            return strBegin + nNumber.toFixed(i + 1).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + strEnd;
        }
    }

    return strBegin + nNumber.toFixed(nSoKyTuThapPhan).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + strEnd;
}
