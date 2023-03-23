function recursiva(max) {
    console.log(max);
    if (max >= 10099) return;
    max++;
    recursiva(max);
}

recursiva(0);