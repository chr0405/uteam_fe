import React from 'react'
import { Link } from 'react-router-dom'
import { BiSearch } from "react-icons/bi"
import { TfiWrite } from "react-icons/tfi";

export default function SearchAndWrite() {
  return (
    <div>
        <Link to="/SearchPage">
        <BiSearch size="20" />
        </Link>

        <Link to="/WritePage">
        <TfiWrite size="20" />
        </Link>
    </div>
  )
}
