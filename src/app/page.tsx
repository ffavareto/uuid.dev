"use client"
import { useState } from "react"
import { v1 as uuidv1, v4 as uuidv4, v6 as uuidv6, v7 as uuidv7 } from 'uuid';
import { FaCopy } from 'react-icons/fa';
import Link from "next/link";

export default function Home() {
  const [version, setVersion] = useState('v4')
  const [uuid, setUUID] = useState('')

  function generateUUID() {
    switch (version) {
      case 'v1':
        setUUID(uuidv1())
        break
      case 'v4':
        setUUID(uuidv4())
        break
      case 'v6':
        setUUID(uuidv6())
        break
      case 'v7':
        setUUID(uuidv7())
        break
    }
  }

  function copyUUID() {
    navigator.clipboard.writeText(uuid)
  }

  return (
    <>
      <section className="text-slate-600 m-auto md:w-2/3 w-10/12 bg-slate-100 rounded mt-8 p-4 md:text-lg text-xs">
        <h1 className="text-center font-bold text-xl">Gerador de UUID</h1>
        <Link href="https://pt.wikipedia.org/wiki/Identificador_%C3%BAnico_universal" target="_blank" className="text-xs underline">
          O que é UUID?
        </Link>
        <div className="my-8">
          <label htmlFor="version" className="mr-4">Selecione a versão</label>
          <select id="version" value={version} onChange={(e) => setVersion(e.target.value)} className="rounded">
            <option value="v1">Versão 1</option>
            <option value="v4">Versão 4</option>
            <option value="v6">Versão 6</option>
            <option value="v7">Versão 7</option>
          </select>
        </div>
        <div className="flex justify-end">
          <button onClick={generateUUID} className="px-3 py-1 rounded bg-slate-600 text-slate-50 md:text-lg text-xs">
            Gerar UUID
          </button>
        </div>
      </section>

      {uuid ?
        (
          <section className="text-slate-600 m-auto md:w-2/3 w-10/12 bg-slate-100 rounded mt-8 p-4 md:text-lg text-xs">
            <div className="flex justify-between">
              <p>{uuid}</p>
              <button className="active:mt-[2px] active:opacity-50" onClick={copyUUID}>
                <FaCopy />
              </button>
            </div>
          </section>
        ) : ''
      }
    </>
  )
}
