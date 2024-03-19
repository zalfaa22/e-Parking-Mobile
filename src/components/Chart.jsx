import React from 'react'
import './css/chart.css'

export default function Chart() {
  return (
    <div className='chart'>
        <div className='wraper d-flex align-items-end'>
            <div className='wrap'>
                <div className='d-flex align-items-end size-chart'>
                    <div className='dengan1'></div>
                    <div className='tanpa'></div>
                </div>
                <p className='m-0'>Januari</p>
            </div>
            <div className='wrap'>
                <div className='d-flex align-items-end size-chart'>
                    <div className='dengan' style={{height: "155px"}}></div>
                    <div className='tanpa' style={{height: "93px"}}></div>
                </div>
                <p className='m-0'>Februari</p>
            </div>
            <div className='wrap'>
                <div className='d-flex align-items-end size-chart'>
                    <div className='dengan' style={{height: "189px"}}></div>
                    <div className='tanpa' style={{height: "12px"}}></div>
                </div>
                <p className='m-0'>Maret</p>
            </div>
            <div className='wrap'>
                <div className='d-flex align-items-end size-chart'>
                    <div className='dengan' style={{height: "131px"}}></div>
                    <div className='tanpa' style={{height: "1px"}}></div>
                </div>
                <p className='m-0'>April</p>
            </div>
            <div className='wrap'>
                <div className='d-flex align-items-end size-chart'>
                    <div className='dengan' style={{height: "55px"}}></div>
                    <div className='tanpa' style={{height: "1px"}}></div>
                </div>
                <p className='m-0'>Mei</p>
            </div>
            <div className='wrap'>
                <div className='d-flex align-items-end size-chart'>
                    <div className='dengan' style={{height: "190px"}}></div>
                    <div className='tanpa' style={{height: "1px"}}></div>
                </div>
                <p className='m-0'>Juni</p>
            </div>
            <div className='wrap'>
                <div className='d-flex align-items-end size-chart'>
                    <div className='dengan' style={{height: "216px"}}></div>
                    <div className='tanpa' style={{height: "116px"}}></div>
                </div>
                <p className='m-0'>Juli</p>
            </div>
            <div className='wrap'>
                <div className='d-flex align-items-end size-chart'>
                    <div className='dengan' style={{height: "216px"}}></div>
                    <div className='tanpa' style={{height: "150px"}}></div>
                </div>
                <p className='m-0'>Agustus</p>
            </div>
            <div className='wrap'>
                <div className='d-flex align-items-end size-chart'>
                    <div className='dengan' style={{height: "27px"}}></div>
                    <div className='tanpa' style={{height: "177px"}}></div>
                </div>
                <p className='m-0'>September</p>
            </div>
            <div className='wrap'>
                <div className='d-flex align-items-end size-chart'>
                    <div className='dengan' style={{height: "73px"}}></div>
                    <div className='tanpa' style={{height: "124px"}}></div>
                </div>
                <p className='m-0'>Oktober</p>
            </div>
            <div className='wrap'>
                <div className='d-flex align-items-end size-chart'>
                    <div className='dengan' style={{height: "216px"}}></div>
                    <div className='tanpa' style={{height: "48px"}}></div>
                </div>
                <p className='m-0'>November</p>
            </div>
            <div className='wrap'>
                <div className='d-flex align-items-end size-chart'>
                    <div className='dengan' style={{height: "76px"}}></div>
                    <div className='tanpa' style={{height: "48px"}}></div>
                </div>
                <p className='m-0'>Desember</p>
            </div>
        </div>
        <div className='d-flex align-items-center justify-content-center keterangan'>
            <div className='d-flex align-items-center'>
                <img src="../assets/green.svg" alt="" />
                <p className='m-0'>dengan tiket</p>
            </div>
            <div className='d-flex align-items-center'>
                <img src="../assets/red.svg" alt="" />
                <p className='m-0'>tanpa tiket</p>
            </div>
        </div>
    </div>
  )
}
