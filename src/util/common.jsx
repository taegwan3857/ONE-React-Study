import { useState } from "react";

export function useNull(arr){
    for(let i = 0; i<arr.length; i++){
        if(!arr[i]) return false
    }
    return true
}

export function useCheck(a, b){
    if(a !== b) return false
    return true
}
