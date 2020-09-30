window.BENCHMARK_DATA = {
  "lastUpdate": 1601454823314,
  "repoUrl": "https://github.com/aiidateam/aiida-core",
  "xAxis": "id",
  "oneChartGroups": [],
  "entries": {
    "pytest-benchmarks:ubuntu-18.04,django": [
      {
        "cpu": {
          "speed": "2.40",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "8328e07c352e3c84cb7f4a67fe1c4537eb983ce4",
          "message": "Pytest Benchmark",
          "timestamp": "2020-09-09T21:08:28Z",
          "url": "https://github.com/aiidateam/aiida-core/pull/4362/commits/8328e07c352e3c84cb7f4a67fe1c4537eb983ce4"
        },
        "date": 1599730645026,
        "benches": [
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 892.6901124367348,
            "unit": "iter/sec",
            "range": "stddev: 0.00015383",
            "group": "node",
            "extra": "mean: 1.1202 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 197.76403318878084,
            "unit": "iter/sec",
            "range": "stddev: 0.00053444",
            "group": "node",
            "extra": "mean: 5.0565 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 109.341512234734,
            "unit": "iter/sec",
            "range": "stddev: 0.033367",
            "group": "node",
            "extra": "mean: 9.1457 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 194.5271736632814,
            "unit": "iter/sec",
            "range": "stddev: 0.00053886",
            "group": "node",
            "extra": "mean: 5.1407 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 41.38858822769686,
            "unit": "iter/sec",
            "range": "stddev: 0.0020537",
            "group": "node",
            "extra": "mean: 24.161 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 35.70606477543619,
            "unit": "iter/sec",
            "range": "stddev: 0.017846",
            "group": "node",
            "extra": "mean: 28.006 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.30",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "ff194543ea0e2ccfe3eafcd61d563387a92847fb",
          "message": "Pytest Benchmark",
          "timestamp": "2020-09-09T21:08:28Z",
          "url": "https://github.com/aiidateam/aiida-core/pull/4362/commits/ff194543ea0e2ccfe3eafcd61d563387a92847fb"
        },
        "date": 1599731463042,
        "benches": [
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 922.4784596837195,
            "unit": "iter/sec",
            "range": "stddev: 0.00012706",
            "group": "node",
            "extra": "mean: 1.0840 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 156.7542814554267,
            "unit": "iter/sec",
            "range": "stddev: 0.015587",
            "group": "node",
            "extra": "mean: 6.3794 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 192.27263176302935,
            "unit": "iter/sec",
            "range": "stddev: 0.00056928",
            "group": "node",
            "extra": "mean: 5.2009 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 199.30848605330493,
            "unit": "iter/sec",
            "range": "stddev: 0.00043136",
            "group": "node",
            "extra": "mean: 5.0173 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 43.42347190803886,
            "unit": "iter/sec",
            "range": "stddev: 0.0033667",
            "group": "node",
            "extra": "mean: 23.029 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 42.6518106065508,
            "unit": "iter/sec",
            "range": "stddev: 0.014287",
            "group": "node",
            "extra": "mean: 23.446 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.60",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "a5a84662acdae669f4d2310e45dec1b183ca1fcd",
          "message": "Pytest Benchmark",
          "timestamp": "2020-09-09T21:08:28Z",
          "url": "https://github.com/aiidateam/aiida-core/pull/4362/commits/a5a84662acdae669f4d2310e45dec1b183ca1fcd"
        },
        "date": 1599732259586,
        "benches": [
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 1116.788672356645,
            "unit": "iter/sec",
            "range": "stddev: 0.00010325",
            "group": "node",
            "extra": "mean: 895.42 usec\nrounds: 209"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 235.93455147894878,
            "unit": "iter/sec",
            "range": "stddev: 0.00021208",
            "group": "node",
            "extra": "mean: 4.2385 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 141.49521606726998,
            "unit": "iter/sec",
            "range": "stddev: 0.023494",
            "group": "node",
            "extra": "mean: 7.0674 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 238.2711201918703,
            "unit": "iter/sec",
            "range": "stddev: 0.00058487",
            "group": "node",
            "extra": "mean: 4.1969 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 47.35870002141336,
            "unit": "iter/sec",
            "range": "stddev: 0.0016020",
            "group": "node",
            "extra": "mean: 21.115 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 44.30592307866228,
            "unit": "iter/sec",
            "range": "stddev: 0.014101",
            "group": "node",
            "extra": "mean: 22.570 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.60",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "5e6083547fb78d471ea2e54cf0868f2427cbdae3",
          "message": "Pytest Benchmark",
          "timestamp": "2020-09-09T21:08:28Z",
          "url": "https://github.com/aiidateam/aiida-core/pull/4362/commits/5e6083547fb78d471ea2e54cf0868f2427cbdae3"
        },
        "date": 1599733067311,
        "benches": [
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 1105.7716630766997,
            "unit": "iter/sec",
            "range": "stddev: 0.000091081",
            "group": "node",
            "extra": "mean: 904.35 usec\nrounds: 190"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 222.33896911496453,
            "unit": "iter/sec",
            "range": "stddev: 0.00060431",
            "group": "node",
            "extra": "mean: 4.4976 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 194.6199876287364,
            "unit": "iter/sec",
            "range": "stddev: 0.0036731",
            "group": "node",
            "extra": "mean: 5.1382 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 240.3411760279346,
            "unit": "iter/sec",
            "range": "stddev: 0.00037333",
            "group": "node",
            "extra": "mean: 4.1608 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 45.52705813834543,
            "unit": "iter/sec",
            "range": "stddev: 0.010361",
            "group": "node",
            "extra": "mean: 21.965 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 44.195053154096705,
            "unit": "iter/sec",
            "range": "stddev: 0.015048",
            "group": "node",
            "extra": "mean: 22.627 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.60",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "fd27d6419c1cf01fdf8660f12a5d749cdbc50d41",
          "message": "Pytest Benchmark",
          "timestamp": "2020-09-09T21:08:28Z",
          "url": "https://github.com/aiidateam/aiida-core/pull/4362/commits/fd27d6419c1cf01fdf8660f12a5d749cdbc50d41"
        },
        "date": 1599753976395,
        "benches": [
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 1102.5274722285392,
            "unit": "iter/sec",
            "range": "stddev: 0.000083069",
            "group": "node",
            "extra": "mean: 907.01 usec\nrounds: 196"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 229.45165132616324,
            "unit": "iter/sec",
            "range": "stddev: 0.00048411",
            "group": "node",
            "extra": "mean: 4.3582 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 216.8770398398261,
            "unit": "iter/sec",
            "range": "stddev: 0.00024128",
            "group": "node",
            "extra": "mean: 4.6109 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 241.82923171231755,
            "unit": "iter/sec",
            "range": "stddev: 0.00057616",
            "group": "node",
            "extra": "mean: 4.1351 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 47.87630595630726,
            "unit": "iter/sec",
            "range": "stddev: 0.0016074",
            "group": "node",
            "extra": "mean: 20.887 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 45.63179269505632,
            "unit": "iter/sec",
            "range": "stddev: 0.015218",
            "group": "node",
            "extra": "mean: 21.915 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.30",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "af1e5bbdc76f227c0f4b17b8a1fddc2053a44889",
          "message": "Pytest Benchmark",
          "timestamp": "2020-09-09T21:08:28Z",
          "url": "https://github.com/aiidateam/aiida-core/pull/4362/commits/af1e5bbdc76f227c0f4b17b8a1fddc2053a44889"
        },
        "date": 1599756061828,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 3.4230933763464417,
            "unit": "iter/sec",
            "range": "stddev: 0.013876",
            "group": "engine",
            "extra": "mean: 292.13 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 0.8118020122037132,
            "unit": "iter/sec",
            "range": "stddev: 0.056500",
            "group": "engine",
            "extra": "mean: 1.2318 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 0.9223326829589825,
            "unit": "iter/sec",
            "range": "stddev: 0.048760",
            "group": "engine",
            "extra": "mean: 1.0842 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-calcjob-loop]",
            "value": 0.17412278513525872,
            "unit": "iter/sec",
            "range": "stddev: 0.18007",
            "group": "engine",
            "extra": "mean: 5.7431 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.20374746894490228,
            "unit": "iter/sec",
            "range": "stddev: 0.086164",
            "group": "engine",
            "extra": "mean: 4.9080 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 874.979814364268,
            "unit": "iter/sec",
            "range": "stddev: 0.00014235",
            "group": "node",
            "extra": "mean: 1.1429 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 188.65741242129954,
            "unit": "iter/sec",
            "range": "stddev: 0.00050883",
            "group": "node",
            "extra": "mean: 5.3006 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 177.11035017802436,
            "unit": "iter/sec",
            "range": "stddev: 0.00075437",
            "group": "node",
            "extra": "mean: 5.6462 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 191.19033773606913,
            "unit": "iter/sec",
            "range": "stddev: 0.00057030",
            "group": "node",
            "extra": "mean: 5.2304 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 40.79661182606528,
            "unit": "iter/sec",
            "range": "stddev: 0.0031541",
            "group": "node",
            "extra": "mean: 24.512 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 39.334172927549545,
            "unit": "iter/sec",
            "range": "stddev: 0.014704",
            "group": "node",
            "extra": "mean: 25.423 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.60",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "731c8eab83c252503528ce9a24e6161ac31f3c13",
          "message": "Pytest Benchmark",
          "timestamp": "2020-09-09T21:08:28Z",
          "url": "https://github.com/aiidateam/aiida-core/pull/4362/commits/731c8eab83c252503528ce9a24e6161ac31f3c13"
        },
        "date": 1599758335484,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 3.5608961844877904,
            "unit": "iter/sec",
            "range": "stddev: 0.0042169",
            "group": "engine",
            "extra": "mean: 280.83 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 0.8688814986200055,
            "unit": "iter/sec",
            "range": "stddev: 0.041742",
            "group": "engine",
            "extra": "mean: 1.1509 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 0.9666489803123582,
            "unit": "iter/sec",
            "range": "stddev: 0.054018",
            "group": "engine",
            "extra": "mean: 1.0345 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local_local[serial-calcjob-loop]",
            "value": 0.1833025321491672,
            "unit": "iter/sec",
            "range": "stddev: 0.12383",
            "group": "engine",
            "extra": "mean: 5.4555 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.2158158846097108,
            "unit": "iter/sec",
            "range": "stddev: 0.079425",
            "group": "engine",
            "extra": "mean: 4.6336 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 1011.5099010597272,
            "unit": "iter/sec",
            "range": "stddev: 0.00041477",
            "group": "node",
            "extra": "mean: 988.62 usec\nrounds: 202"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 230.97850677237403,
            "unit": "iter/sec",
            "range": "stddev: 0.00051002",
            "group": "node",
            "extra": "mean: 4.3294 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 218.65976723099106,
            "unit": "iter/sec",
            "range": "stddev: 0.00016668",
            "group": "node",
            "extra": "mean: 4.5733 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 240.98832183368177,
            "unit": "iter/sec",
            "range": "stddev: 0.00043976",
            "group": "node",
            "extra": "mean: 4.1496 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 44.037047714738215,
            "unit": "iter/sec",
            "range": "stddev: 0.015884",
            "group": "node",
            "extra": "mean: 22.708 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 44.14592050837919,
            "unit": "iter/sec",
            "range": "stddev: 0.0061400",
            "group": "node",
            "extra": "mean: 22.652 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.30",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "f53bf967f1fb7b9201fa3937a21fe826fcce343d",
          "message": "Pytest Benchmark",
          "timestamp": "2020-09-10T17:18:54Z",
          "url": "https://github.com/aiidateam/aiida-core/pull/4362/commits/f53bf967f1fb7b9201fa3937a21fe826fcce343d"
        },
        "date": 1599764607193,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 3.1451347427728584,
            "unit": "iter/sec",
            "range": "stddev: 0.053798",
            "group": "engine",
            "extra": "mean: 317.95 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 0.7592884768274909,
            "unit": "iter/sec",
            "range": "stddev: 0.089579",
            "group": "engine",
            "extra": "mean: 1.3170 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 0.8423139738068088,
            "unit": "iter/sec",
            "range": "stddev: 0.070284",
            "group": "engine",
            "extra": "mean: 1.1872 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-calcjob-loop]",
            "value": 0.16833719348041912,
            "unit": "iter/sec",
            "range": "stddev: 0.20179",
            "group": "engine",
            "extra": "mean: 5.9405 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.1775747143015169,
            "unit": "iter/sec",
            "range": "stddev: 0.22874",
            "group": "engine",
            "extra": "mean: 5.6314 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[basic-loop]",
            "value": 2.246282676105141,
            "unit": "iter/sec",
            "range": "stddev: 0.034467",
            "group": "engine",
            "extra": "mean: 445.18 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-wc-loop]",
            "value": 0.5270944548208711,
            "unit": "iter/sec",
            "range": "stddev: 0.071822",
            "group": "engine",
            "extra": "mean: 1.8972 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-wc-loop]",
            "value": 0.5759794529531871,
            "unit": "iter/sec",
            "range": "stddev: 0.058907",
            "group": "engine",
            "extra": "mean: 1.7362 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-calcjob-loop]",
            "value": 0.13152032097916463,
            "unit": "iter/sec",
            "range": "stddev: 0.19310",
            "group": "engine",
            "extra": "mean: 7.6034 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-calcjob-loop]",
            "value": 0.15328558989422783,
            "unit": "iter/sec",
            "range": "stddev: 0.21732",
            "group": "engine",
            "extra": "mean: 6.5238 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 769.8085780989941,
            "unit": "iter/sec",
            "range": "stddev: 0.00040041",
            "group": "node",
            "extra": "mean: 1.2990 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 172.94437930308302,
            "unit": "iter/sec",
            "range": "stddev: 0.00079065",
            "group": "node",
            "extra": "mean: 5.7822 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 163.80887673581586,
            "unit": "iter/sec",
            "range": "stddev: 0.00081813",
            "group": "node",
            "extra": "mean: 6.1047 msec\nrounds: 101"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 171.86982924235048,
            "unit": "iter/sec",
            "range": "stddev: 0.0010590",
            "group": "node",
            "extra": "mean: 5.8184 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 30.92661499021534,
            "unit": "iter/sec",
            "range": "stddev: 0.020590",
            "group": "node",
            "extra": "mean: 32.335 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 34.6696793480937,
            "unit": "iter/sec",
            "range": "stddev: 0.0033167",
            "group": "node",
            "extra": "mean: 28.844 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.30",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "cbd44d0114d4e40c269ba789ed873ab50fff6d17",
          "message": "Pytest Benchmark",
          "timestamp": "2020-09-10T17:18:54Z",
          "url": "https://github.com/aiidateam/aiida-core/pull/4362/commits/cbd44d0114d4e40c269ba789ed873ab50fff6d17"
        },
        "date": 1599765253049,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 3.2161566195562528,
            "unit": "iter/sec",
            "range": "stddev: 0.010645",
            "group": "engine",
            "extra": "mean: 310.93 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 0.7799135066421767,
            "unit": "iter/sec",
            "range": "stddev: 0.045814",
            "group": "engine",
            "extra": "mean: 1.2822 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 0.8667985528113407,
            "unit": "iter/sec",
            "range": "stddev: 0.053737",
            "group": "engine",
            "extra": "mean: 1.1537 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-calcjob-loop]",
            "value": 0.17119534777532622,
            "unit": "iter/sec",
            "range": "stddev: 0.12182",
            "group": "engine",
            "extra": "mean: 5.8413 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.19436922486101663,
            "unit": "iter/sec",
            "range": "stddev: 0.16336",
            "group": "engine",
            "extra": "mean: 5.1448 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[basic-loop]",
            "value": 2.4642566485369364,
            "unit": "iter/sec",
            "range": "stddev: 0.013133",
            "group": "engine",
            "extra": "mean: 405.80 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-wc-loop]",
            "value": 0.5926032851224212,
            "unit": "iter/sec",
            "range": "stddev: 0.094894",
            "group": "engine",
            "extra": "mean: 1.6875 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-wc-loop]",
            "value": 0.6841900363762353,
            "unit": "iter/sec",
            "range": "stddev: 0.056618",
            "group": "engine",
            "extra": "mean: 1.4616 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-calcjob-loop]",
            "value": 0.15228512926591314,
            "unit": "iter/sec",
            "range": "stddev: 0.14964",
            "group": "engine",
            "extra": "mean: 6.5666 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-calcjob-loop]",
            "value": 0.1780839108177389,
            "unit": "iter/sec",
            "range": "stddev: 0.16267",
            "group": "engine",
            "extra": "mean: 5.6153 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 894.1555221654166,
            "unit": "iter/sec",
            "range": "stddev: 0.00011621",
            "group": "node",
            "extra": "mean: 1.1184 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 184.93023488403625,
            "unit": "iter/sec",
            "range": "stddev: 0.00045416",
            "group": "node",
            "extra": "mean: 5.4074 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 167.7880137921742,
            "unit": "iter/sec",
            "range": "stddev: 0.0012672",
            "group": "node",
            "extra": "mean: 5.9599 msec\nrounds: 110"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 191.750905204235,
            "unit": "iter/sec",
            "range": "stddev: 0.00048007",
            "group": "node",
            "extra": "mean: 5.2151 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 39.24626812092466,
            "unit": "iter/sec",
            "range": "stddev: 0.0025507",
            "group": "node",
            "extra": "mean: 25.480 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 39.294190380782894,
            "unit": "iter/sec",
            "range": "stddev: 0.0018043",
            "group": "node",
            "extra": "mean: 25.449 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.60",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "33ead345827bed40819db28882b33e36035c83f6",
          "message": "update [skip ci]",
          "timestamp": "2020-09-10T20:14:41+01:00",
          "url": "https://github.com/aiidateam/aiida-core/commit/33ead345827bed40819db28882b33e36035c83f6",
          "distinct": true,
          "tree_id": "76b476b599ba5230e2a87670f510167444c9726c"
        },
        "date": 1599765829213,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 3.521660867554699,
            "unit": "iter/sec",
            "range": "stddev: 0.0088719",
            "group": "engine",
            "extra": "mean: 283.96 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 0.832730089708117,
            "unit": "iter/sec",
            "range": "stddev: 0.066965",
            "group": "engine",
            "extra": "mean: 1.2009 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 0.89820175147389,
            "unit": "iter/sec",
            "range": "stddev: 0.048002",
            "group": "engine",
            "extra": "mean: 1.1133 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-calcjob-loop]",
            "value": 0.16124351938653256,
            "unit": "iter/sec",
            "range": "stddev: 0.47461",
            "group": "engine",
            "extra": "mean: 6.2018 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.19897001387556276,
            "unit": "iter/sec",
            "range": "stddev: 0.085299",
            "group": "engine",
            "extra": "mean: 5.0259 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[basic-loop]",
            "value": 2.5613470990743687,
            "unit": "iter/sec",
            "range": "stddev: 0.055360",
            "group": "engine",
            "extra": "mean: 390.42 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-wc-loop]",
            "value": 0.6334783694983304,
            "unit": "iter/sec",
            "range": "stddev: 0.067546",
            "group": "engine",
            "extra": "mean: 1.5786 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-wc-loop]",
            "value": 0.5165395198560613,
            "unit": "iter/sec",
            "range": "stddev: 1.7059",
            "group": "engine",
            "extra": "mean: 1.9360 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-calcjob-loop]",
            "value": 0.14954497146084383,
            "unit": "iter/sec",
            "range": "stddev: 0.33249",
            "group": "engine",
            "extra": "mean: 6.6870 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-calcjob-loop]",
            "value": 0.17343961821410026,
            "unit": "iter/sec",
            "range": "stddev: 0.59822",
            "group": "engine",
            "extra": "mean: 5.7657 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 925.0857518701001,
            "unit": "iter/sec",
            "range": "stddev: 0.00021115",
            "group": "node",
            "extra": "mean: 1.0810 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 207.96898381961,
            "unit": "iter/sec",
            "range": "stddev: 0.00022262",
            "group": "node",
            "extra": "mean: 4.8084 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 191.570972668472,
            "unit": "iter/sec",
            "range": "stddev: 0.00034547",
            "group": "node",
            "extra": "mean: 5.2200 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 210.99388267569654,
            "unit": "iter/sec",
            "range": "stddev: 0.00034920",
            "group": "node",
            "extra": "mean: 4.7395 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 39.332178222251336,
            "unit": "iter/sec",
            "range": "stddev: 0.018085",
            "group": "node",
            "extra": "mean: 25.424 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 43.07518252675722,
            "unit": "iter/sec",
            "range": "stddev: 0.0015233",
            "group": "node",
            "extra": "mean: 23.215 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.40",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "115342eae460f7c49f3fdf66e1f4cdc4fef5acbd",
          "message": "update [skip ci]",
          "timestamp": "2020-09-10T20:29:02+01:00",
          "url": "https://github.com/aiidateam/aiida-core/commit/115342eae460f7c49f3fdf66e1f4cdc4fef5acbd",
          "distinct": true,
          "tree_id": "40a7f322fa263975cd99ecc0e4bb8c0c2b1c59ad"
        },
        "date": 1599766636763,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 3.60466577195624,
            "unit": "iter/sec",
            "range": "stddev: 0.044636",
            "group": "engine",
            "extra": "mean: 277.42 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 0.8713087425528202,
            "unit": "iter/sec",
            "range": "stddev: 0.034856",
            "group": "engine",
            "extra": "mean: 1.1477 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 0.9239398391345667,
            "unit": "iter/sec",
            "range": "stddev: 0.097017",
            "group": "engine",
            "extra": "mean: 1.0823 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-calcjob-loop]",
            "value": 0.1887929471177875,
            "unit": "iter/sec",
            "range": "stddev: 0.072672",
            "group": "engine",
            "extra": "mean: 5.2968 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.2187756675427554,
            "unit": "iter/sec",
            "range": "stddev: 0.079024",
            "group": "engine",
            "extra": "mean: 4.5709 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[basic-loop]",
            "value": 2.799813274181214,
            "unit": "iter/sec",
            "range": "stddev: 0.042104",
            "group": "engine",
            "extra": "mean: 357.17 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-wc-loop]",
            "value": 0.6931874110762263,
            "unit": "iter/sec",
            "range": "stddev: 0.052749",
            "group": "engine",
            "extra": "mean: 1.4426 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-wc-loop]",
            "value": 0.769624616813779,
            "unit": "iter/sec",
            "range": "stddev: 0.056943",
            "group": "engine",
            "extra": "mean: 1.2993 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-calcjob-loop]",
            "value": 0.1689688883280173,
            "unit": "iter/sec",
            "range": "stddev: 0.089099",
            "group": "engine",
            "extra": "mean: 5.9182 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-calcjob-loop]",
            "value": 0.1995384961042572,
            "unit": "iter/sec",
            "range": "stddev: 0.074474",
            "group": "engine",
            "extra": "mean: 5.0116 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 1018.3216827004559,
            "unit": "iter/sec",
            "range": "stddev: 0.000060407",
            "group": "node",
            "extra": "mean: 982.01 usec\nrounds: 209"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 216.20559392682475,
            "unit": "iter/sec",
            "range": "stddev: 0.00036176",
            "group": "node",
            "extra": "mean: 4.6252 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 186.056904267417,
            "unit": "iter/sec",
            "range": "stddev: 0.0032250",
            "group": "node",
            "extra": "mean: 5.3747 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 220.0177586893323,
            "unit": "iter/sec",
            "range": "stddev: 0.00021693",
            "group": "node",
            "extra": "mean: 4.5451 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 44.45906483756816,
            "unit": "iter/sec",
            "range": "stddev: 0.0014245",
            "group": "node",
            "extra": "mean: 22.493 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 41.52874601548919,
            "unit": "iter/sec",
            "range": "stddev: 0.016083",
            "group": "node",
            "extra": "mean: 24.080 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.30",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "c2c29be9da141714834c22e3b87ba4c6be22fccd",
          "message": "update [skip ci]",
          "timestamp": "2020-09-10T20:48:26+01:00",
          "url": "https://github.com/aiidateam/aiida-core/commit/c2c29be9da141714834c22e3b87ba4c6be22fccd",
          "distinct": true,
          "tree_id": "77b0a47016a3b3dc4bf37abb1f154b63a3b2aa0b"
        },
        "date": 1599767844163,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 3.318053540829413,
            "unit": "iter/sec",
            "range": "stddev: 0.014308",
            "group": "engine",
            "extra": "mean: 301.38 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 0.7882509990450803,
            "unit": "iter/sec",
            "range": "stddev: 0.035664",
            "group": "engine",
            "extra": "mean: 1.2686 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 0.8698340843926278,
            "unit": "iter/sec",
            "range": "stddev: 0.053566",
            "group": "engine",
            "extra": "mean: 1.1496 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-calcjob-loop]",
            "value": 0.17198193283903881,
            "unit": "iter/sec",
            "range": "stddev: 0.094225",
            "group": "engine",
            "extra": "mean: 5.8146 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.1951321127747333,
            "unit": "iter/sec",
            "range": "stddev: 0.091341",
            "group": "engine",
            "extra": "mean: 5.1247 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[basic-loop]",
            "value": 2.536008025392205,
            "unit": "iter/sec",
            "range": "stddev: 0.054961",
            "group": "engine",
            "extra": "mean: 394.32 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-wc-loop]",
            "value": 0.6321416325388983,
            "unit": "iter/sec",
            "range": "stddev: 0.058244",
            "group": "engine",
            "extra": "mean: 1.5819 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-wc-loop]",
            "value": 0.7233043741627224,
            "unit": "iter/sec",
            "range": "stddev: 0.056190",
            "group": "engine",
            "extra": "mean: 1.3825 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-calcjob-loop]",
            "value": 0.1546841700490492,
            "unit": "iter/sec",
            "range": "stddev: 0.16288",
            "group": "engine",
            "extra": "mean: 6.4648 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-calcjob-loop]",
            "value": 0.17976864898860676,
            "unit": "iter/sec",
            "range": "stddev: 0.088943",
            "group": "engine",
            "extra": "mean: 5.5627 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 871.2590956736811,
            "unit": "iter/sec",
            "range": "stddev: 0.00025816",
            "group": "node",
            "extra": "mean: 1.1478 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 190.50111401173123,
            "unit": "iter/sec",
            "range": "stddev: 0.00064018",
            "group": "node",
            "extra": "mean: 5.2493 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 180.34895151817366,
            "unit": "iter/sec",
            "range": "stddev: 0.00043815",
            "group": "node",
            "extra": "mean: 5.5448 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 191.26154169685475,
            "unit": "iter/sec",
            "range": "stddev: 0.00095275",
            "group": "node",
            "extra": "mean: 5.2284 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 43.03408923259462,
            "unit": "iter/sec",
            "range": "stddev: 0.0016149",
            "group": "node",
            "extra": "mean: 23.237 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 38.58156356897101,
            "unit": "iter/sec",
            "range": "stddev: 0.017396",
            "group": "node",
            "extra": "mean: 25.919 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.30",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "3b9d693bbcfbef0a9f681d0413050ee8e28f32f0",
          "message": "update [skip ci]",
          "timestamp": "2020-09-10T20:50:59+01:00",
          "url": "https://github.com/aiidateam/aiida-core/commit/3b9d693bbcfbef0a9f681d0413050ee8e28f32f0",
          "distinct": true,
          "tree_id": "1bd3c6009554ef89e3b10f5dcd5b73b12fdec060"
        },
        "date": 1599767967356,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 3.578370919006883,
            "unit": "iter/sec",
            "range": "stddev: 0.0064388",
            "group": "engine",
            "extra": "mean: 279.46 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 0.8667690357071071,
            "unit": "iter/sec",
            "range": "stddev: 0.038927",
            "group": "engine",
            "extra": "mean: 1.1537 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 0.9619924296509845,
            "unit": "iter/sec",
            "range": "stddev: 0.046026",
            "group": "engine",
            "extra": "mean: 1.0395 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-calcjob-loop]",
            "value": 0.18583779241813492,
            "unit": "iter/sec",
            "range": "stddev: 0.11428",
            "group": "engine",
            "extra": "mean: 5.3810 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.2146940068020528,
            "unit": "iter/sec",
            "range": "stddev: 0.059459",
            "group": "engine",
            "extra": "mean: 4.6578 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[basic-loop]",
            "value": 2.8714233487238094,
            "unit": "iter/sec",
            "range": "stddev: 0.011636",
            "group": "engine",
            "extra": "mean: 348.26 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-wc-loop]",
            "value": 0.6859058189174433,
            "unit": "iter/sec",
            "range": "stddev: 0.066153",
            "group": "engine",
            "extra": "mean: 1.4579 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-wc-loop]",
            "value": 0.7703331188273732,
            "unit": "iter/sec",
            "range": "stddev: 0.040383",
            "group": "engine",
            "extra": "mean: 1.2981 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-calcjob-loop]",
            "value": 0.16552935972483,
            "unit": "iter/sec",
            "range": "stddev: 0.086994",
            "group": "engine",
            "extra": "mean: 6.0412 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-calcjob-loop]",
            "value": 0.19576260467205395,
            "unit": "iter/sec",
            "range": "stddev: 0.072403",
            "group": "engine",
            "extra": "mean: 5.1082 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 947.8668470931254,
            "unit": "iter/sec",
            "range": "stddev: 0.000088776",
            "group": "node",
            "extra": "mean: 1.0550 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 199.40627388852698,
            "unit": "iter/sec",
            "range": "stddev: 0.00076642",
            "group": "node",
            "extra": "mean: 5.0149 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 194.32530913203098,
            "unit": "iter/sec",
            "range": "stddev: 0.00079806",
            "group": "node",
            "extra": "mean: 5.1460 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 200.00800111986624,
            "unit": "iter/sec",
            "range": "stddev: 0.00039966",
            "group": "node",
            "extra": "mean: 4.9998 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 42.033761623261206,
            "unit": "iter/sec",
            "range": "stddev: 0.014489",
            "group": "node",
            "extra": "mean: 23.790 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 42.43920251834241,
            "unit": "iter/sec",
            "range": "stddev: 0.0055300",
            "group": "node",
            "extra": "mean: 23.563 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.60",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "7d521c5e049b2ccb1fa2aaf303fedb1850d9da87",
          "message": "add import-export [skip ci]",
          "timestamp": "2020-09-10T22:15:43+01:00",
          "url": "https://github.com/aiidateam/aiida-core/commit/7d521c5e049b2ccb1fa2aaf303fedb1850d9da87",
          "distinct": true,
          "tree_id": "fcf2b1e721e078dfca86cee6645c3e6784bb43d1"
        },
        "date": 1599773156496,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 3.3272953470311233,
            "unit": "iter/sec",
            "range": "stddev: 0.0087980",
            "group": "engine",
            "extra": "mean: 300.54 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 0.7994446861505959,
            "unit": "iter/sec",
            "range": "stddev: 0.051461",
            "group": "engine",
            "extra": "mean: 1.2509 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 0.8831482147151971,
            "unit": "iter/sec",
            "range": "stddev: 0.063960",
            "group": "engine",
            "extra": "mean: 1.1323 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-calcjob-loop]",
            "value": 0.16742790917122718,
            "unit": "iter/sec",
            "range": "stddev: 0.12029",
            "group": "engine",
            "extra": "mean: 5.9727 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.19234573605271618,
            "unit": "iter/sec",
            "range": "stddev: 0.12979",
            "group": "engine",
            "extra": "mean: 5.1990 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[basic-loop]",
            "value": 2.5029292982984463,
            "unit": "iter/sec",
            "range": "stddev: 0.022755",
            "group": "engine",
            "extra": "mean: 399.53 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-wc-loop]",
            "value": 0.5973820721505938,
            "unit": "iter/sec",
            "range": "stddev: 0.046581",
            "group": "engine",
            "extra": "mean: 1.6740 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-wc-loop]",
            "value": 0.6802341653817906,
            "unit": "iter/sec",
            "range": "stddev: 0.054567",
            "group": "engine",
            "extra": "mean: 1.4701 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-calcjob-loop]",
            "value": 0.14860119612850206,
            "unit": "iter/sec",
            "range": "stddev: 0.12376",
            "group": "engine",
            "extra": "mean: 6.7294 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-calcjob-loop]",
            "value": 0.17125839684685026,
            "unit": "iter/sec",
            "range": "stddev: 0.099992",
            "group": "engine",
            "extra": "mean: 5.8391 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[no-objects]",
            "value": 2.52881833471687,
            "unit": "iter/sec",
            "range": "stddev: 0.058665",
            "group": "import-export",
            "extra": "mean: 395.44 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[with-objects]",
            "value": 2.242522770482318,
            "unit": "iter/sec",
            "range": "stddev: 0.052380",
            "group": "import-export",
            "extra": "mean: 445.93 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[no-objects]",
            "value": 1.4245633042236248,
            "unit": "iter/sec",
            "range": "stddev: 0.073275",
            "group": "import-export",
            "extra": "mean: 701.97 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[with-objects]",
            "value": 1.3661976299125687,
            "unit": "iter/sec",
            "range": "stddev: 0.047620",
            "group": "import-export",
            "extra": "mean: 731.96 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 987.106662053939,
            "unit": "iter/sec",
            "range": "stddev: 0.00034160",
            "group": "node",
            "extra": "mean: 1.0131 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 192.22706841240486,
            "unit": "iter/sec",
            "range": "stddev: 0.0011044",
            "group": "node",
            "extra": "mean: 5.2022 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 191.87382208094513,
            "unit": "iter/sec",
            "range": "stddev: 0.00074320",
            "group": "node",
            "extra": "mean: 5.2118 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 216.03954258187696,
            "unit": "iter/sec",
            "range": "stddev: 0.00099146",
            "group": "node",
            "extra": "mean: 4.6288 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 37.80312279492947,
            "unit": "iter/sec",
            "range": "stddev: 0.015649",
            "group": "node",
            "extra": "mean: 26.453 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 37.76979747700348,
            "unit": "iter/sec",
            "range": "stddev: 0.0075738",
            "group": "node",
            "extra": "mean: 26.476 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.40",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "0f46f3c38d57ccaaa0513e1f86621a5f23f5ed95",
          "message": "Merge branch 'develop' into benchmark-test-cjs",
          "timestamp": "2020-09-10T22:26:04+01:00",
          "url": "https://github.com/aiidateam/aiida-core/commit/0f46f3c38d57ccaaa0513e1f86621a5f23f5ed95",
          "distinct": true,
          "tree_id": "9468ef71b969b3c838364960ab1c0947b6b85fb8"
        },
        "date": 1599773745066,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 3.4477871275437275,
            "unit": "iter/sec",
            "range": "stddev: 0.049237",
            "group": "engine",
            "extra": "mean: 290.04 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 0.8512906090411139,
            "unit": "iter/sec",
            "range": "stddev: 0.044038",
            "group": "engine",
            "extra": "mean: 1.1747 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 0.9686873552188137,
            "unit": "iter/sec",
            "range": "stddev: 0.062629",
            "group": "engine",
            "extra": "mean: 1.0323 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-calcjob-loop]",
            "value": 0.18494720294017336,
            "unit": "iter/sec",
            "range": "stddev: 0.084179",
            "group": "engine",
            "extra": "mean: 5.4069 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.2120609259715305,
            "unit": "iter/sec",
            "range": "stddev: 0.10512",
            "group": "engine",
            "extra": "mean: 4.7156 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[basic-loop]",
            "value": 2.8947300501544695,
            "unit": "iter/sec",
            "range": "stddev: 0.0047424",
            "group": "engine",
            "extra": "mean: 345.46 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-wc-loop]",
            "value": 0.6800207467611233,
            "unit": "iter/sec",
            "range": "stddev: 0.059608",
            "group": "engine",
            "extra": "mean: 1.4705 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-wc-loop]",
            "value": 0.7554761497641681,
            "unit": "iter/sec",
            "range": "stddev: 0.049380",
            "group": "engine",
            "extra": "mean: 1.3237 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-calcjob-loop]",
            "value": 0.16449940531319057,
            "unit": "iter/sec",
            "range": "stddev: 0.089104",
            "group": "engine",
            "extra": "mean: 6.0790 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-calcjob-loop]",
            "value": 0.19565743875655545,
            "unit": "iter/sec",
            "range": "stddev: 0.10034",
            "group": "engine",
            "extra": "mean: 5.1110 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[no-objects]",
            "value": 2.590741027801775,
            "unit": "iter/sec",
            "range": "stddev: 0.051077",
            "group": "import-export",
            "extra": "mean: 385.99 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[with-objects]",
            "value": 2.3642818036847726,
            "unit": "iter/sec",
            "range": "stddev: 0.0079880",
            "group": "import-export",
            "extra": "mean: 422.96 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[no-objects]",
            "value": 1.414861234727211,
            "unit": "iter/sec",
            "range": "stddev: 0.068921",
            "group": "import-export",
            "extra": "mean: 706.78 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[with-objects]",
            "value": 1.3150745370170793,
            "unit": "iter/sec",
            "range": "stddev: 0.059396",
            "group": "import-export",
            "extra": "mean: 760.41 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 1005.7574076503867,
            "unit": "iter/sec",
            "range": "stddev: 0.00029845",
            "group": "node",
            "extra": "mean: 994.28 usec\nrounds: 149"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 206.69912053425136,
            "unit": "iter/sec",
            "range": "stddev: 0.00061059",
            "group": "node",
            "extra": "mean: 4.8379 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 199.70013144043696,
            "unit": "iter/sec",
            "range": "stddev: 0.00043909",
            "group": "node",
            "extra": "mean: 5.0075 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 195.6267300201361,
            "unit": "iter/sec",
            "range": "stddev: 0.0011431",
            "group": "node",
            "extra": "mean: 5.1118 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 43.60549858620737,
            "unit": "iter/sec",
            "range": "stddev: 0.0017232",
            "group": "node",
            "extra": "mean: 22.933 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 42.98649519631049,
            "unit": "iter/sec",
            "range": "stddev: 0.0031770",
            "group": "node",
            "extra": "mean: 23.263 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.30",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "4157b5d541a31001f7525b6063cdf8f8ceef7a7c",
          "message": "update [skip ci]",
          "timestamp": "2020-09-10T22:56:39+01:00",
          "url": "https://github.com/aiidateam/aiida-core/commit/4157b5d541a31001f7525b6063cdf8f8ceef7a7c",
          "distinct": true,
          "tree_id": "03712bbb07262b60ed8f2e90dad5d3c90608666e"
        },
        "date": 1599775574675,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 3.2785449565690428,
            "unit": "iter/sec",
            "range": "stddev: 0.048969",
            "group": "engine",
            "extra": "mean: 305.01 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 0.8253399774831284,
            "unit": "iter/sec",
            "range": "stddev: 0.052175",
            "group": "engine",
            "extra": "mean: 1.2116 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 0.8961069014183451,
            "unit": "iter/sec",
            "range": "stddev: 0.060937",
            "group": "engine",
            "extra": "mean: 1.1159 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-calcjob-loop]",
            "value": 0.17975353941663863,
            "unit": "iter/sec",
            "range": "stddev: 0.13387",
            "group": "engine",
            "extra": "mean: 5.5632 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.20809223162176027,
            "unit": "iter/sec",
            "range": "stddev: 0.080310",
            "group": "engine",
            "extra": "mean: 4.8056 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[basic-loop]",
            "value": 2.7888515900873814,
            "unit": "iter/sec",
            "range": "stddev: 0.019326",
            "group": "engine",
            "extra": "mean: 358.57 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-wc-loop]",
            "value": 0.6614235937636112,
            "unit": "iter/sec",
            "range": "stddev: 0.069993",
            "group": "engine",
            "extra": "mean: 1.5119 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-wc-loop]",
            "value": 0.7407476104889513,
            "unit": "iter/sec",
            "range": "stddev: 0.045373",
            "group": "engine",
            "extra": "mean: 1.3500 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-calcjob-loop]",
            "value": 0.16106714832700386,
            "unit": "iter/sec",
            "range": "stddev: 0.054783",
            "group": "engine",
            "extra": "mean: 6.2086 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-calcjob-loop]",
            "value": 0.19051355012893895,
            "unit": "iter/sec",
            "range": "stddev: 0.096667",
            "group": "engine",
            "extra": "mean: 5.2490 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[no-objects]",
            "value": 2.7205011532025085,
            "unit": "iter/sec",
            "range": "stddev: 0.051083",
            "group": "import-export",
            "extra": "mean: 367.58 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[with-objects]",
            "value": 2.427641659098375,
            "unit": "iter/sec",
            "range": "stddev: 0.041558",
            "group": "import-export",
            "extra": "mean: 411.92 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[no-objects]",
            "value": 1.3732064173636884,
            "unit": "iter/sec",
            "range": "stddev: 0.058344",
            "group": "import-export",
            "extra": "mean: 728.22 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[with-objects]",
            "value": 1.2908845615480202,
            "unit": "iter/sec",
            "range": "stddev: 0.044753",
            "group": "import-export",
            "extra": "mean: 774.66 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 909.3830989809305,
            "unit": "iter/sec",
            "range": "stddev: 0.00011747",
            "group": "node",
            "extra": "mean: 1.0996 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 204.97352386737208,
            "unit": "iter/sec",
            "range": "stddev: 0.00039283",
            "group": "node",
            "extra": "mean: 4.8787 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 187.90261703050484,
            "unit": "iter/sec",
            "range": "stddev: 0.00056838",
            "group": "node",
            "extra": "mean: 5.3219 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 202.87565899963323,
            "unit": "iter/sec",
            "range": "stddev: 0.00046196",
            "group": "node",
            "extra": "mean: 4.9291 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 39.36210421030053,
            "unit": "iter/sec",
            "range": "stddev: 0.015324",
            "group": "node",
            "extra": "mean: 25.405 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 42.356999760398324,
            "unit": "iter/sec",
            "range": "stddev: 0.0022175",
            "group": "node",
            "extra": "mean: 23.609 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.60",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "9cadcb33cad0e04103fcce3260ec6e3715c30482",
          "message": "update [skip ci]",
          "timestamp": "2020-09-10T23:23:29+01:00",
          "url": "https://github.com/aiidateam/aiida-core/commit/9cadcb33cad0e04103fcce3260ec6e3715c30482",
          "distinct": true,
          "tree_id": "861b48080809a6669428d5d0974bd25e84439b24"
        },
        "date": 1599777201540,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 3.2804408145357553,
            "unit": "iter/sec",
            "range": "stddev: 0.060653",
            "group": "engine",
            "extra": "mean: 304.84 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 0.7965151437822415,
            "unit": "iter/sec",
            "range": "stddev: 0.047410",
            "group": "engine",
            "extra": "mean: 1.2555 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 0.8775715743003427,
            "unit": "iter/sec",
            "range": "stddev: 0.079826",
            "group": "engine",
            "extra": "mean: 1.1395 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-calcjob-loop]",
            "value": 0.17249502621885993,
            "unit": "iter/sec",
            "range": "stddev: 0.20441",
            "group": "engine",
            "extra": "mean: 5.7973 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.20122671764805347,
            "unit": "iter/sec",
            "range": "stddev: 0.11732",
            "group": "engine",
            "extra": "mean: 4.9695 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[basic-loop]",
            "value": 2.693201414209122,
            "unit": "iter/sec",
            "range": "stddev: 0.018867",
            "group": "engine",
            "extra": "mean: 371.31 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-wc-loop]",
            "value": 0.6325336572767238,
            "unit": "iter/sec",
            "range": "stddev: 0.063758",
            "group": "engine",
            "extra": "mean: 1.5809 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-wc-loop]",
            "value": 0.7153563094871224,
            "unit": "iter/sec",
            "range": "stddev: 0.060499",
            "group": "engine",
            "extra": "mean: 1.3979 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-calcjob-loop]",
            "value": 0.15780786003291863,
            "unit": "iter/sec",
            "range": "stddev: 0.077744",
            "group": "engine",
            "extra": "mean: 6.3368 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-calcjob-loop]",
            "value": 0.1805021020431139,
            "unit": "iter/sec",
            "range": "stddev: 0.17552",
            "group": "engine",
            "extra": "mean: 5.5401 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[no-objects]",
            "value": 2.6500467892812347,
            "unit": "iter/sec",
            "range": "stddev: 0.052382",
            "group": "import-export",
            "extra": "mean: 377.35 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[with-objects]",
            "value": 2.4189676522122077,
            "unit": "iter/sec",
            "range": "stddev: 0.047137",
            "group": "import-export",
            "extra": "mean: 413.40 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[no-objects]",
            "value": 1.5130558338616247,
            "unit": "iter/sec",
            "range": "stddev: 0.065517",
            "group": "import-export",
            "extra": "mean: 660.91 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[with-objects]",
            "value": 1.4066203752879152,
            "unit": "iter/sec",
            "range": "stddev: 0.058128",
            "group": "import-export",
            "extra": "mean: 710.92 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 1095.6284786891001,
            "unit": "iter/sec",
            "range": "stddev: 0.000097635",
            "group": "node",
            "extra": "mean: 912.72 usec\nrounds: 178"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 221.2725201815654,
            "unit": "iter/sec",
            "range": "stddev: 0.00048405",
            "group": "node",
            "extra": "mean: 4.5193 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 204.62517367367124,
            "unit": "iter/sec",
            "range": "stddev: 0.00030247",
            "group": "node",
            "extra": "mean: 4.8870 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 214.39264981719234,
            "unit": "iter/sec",
            "range": "stddev: 0.00043624",
            "group": "node",
            "extra": "mean: 4.6643 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 42.994983847894346,
            "unit": "iter/sec",
            "range": "stddev: 0.0018828",
            "group": "node",
            "extra": "mean: 23.259 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 41.0516020082219,
            "unit": "iter/sec",
            "range": "stddev: 0.0044687",
            "group": "node",
            "extra": "mean: 24.360 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.60",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "bee0be5d391cd20c841fdbd6133eab755c8733e8",
          "message": "use logarithmic y-axes",
          "timestamp": "2020-09-11T14:37:54+01:00",
          "url": "https://github.com/aiidateam/aiida-core/commit/bee0be5d391cd20c841fdbd6133eab755c8733e8",
          "distinct": true,
          "tree_id": "29f5d8c65fc9aed4a37c3b9607fda9ee078fa26b"
        },
        "date": 1599832059631,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 3.4147902918753883,
            "unit": "iter/sec",
            "range": "stddev: 0.047286",
            "group": "engine",
            "extra": "mean: 292.84 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 0.8454569718453486,
            "unit": "iter/sec",
            "range": "stddev: 0.048822",
            "group": "engine",
            "extra": "mean: 1.1828 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 0.9446744728412709,
            "unit": "iter/sec",
            "range": "stddev: 0.055062",
            "group": "engine",
            "extra": "mean: 1.0586 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-calcjob-loop]",
            "value": 0.1752453000336919,
            "unit": "iter/sec",
            "range": "stddev: 0.13416",
            "group": "engine",
            "extra": "mean: 5.7063 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.20841203608340972,
            "unit": "iter/sec",
            "range": "stddev: 0.13855",
            "group": "engine",
            "extra": "mean: 4.7982 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[basic-loop]",
            "value": 2.895513875274814,
            "unit": "iter/sec",
            "range": "stddev: 0.0086310",
            "group": "engine",
            "extra": "mean: 345.36 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-wc-loop]",
            "value": 0.6796273487818733,
            "unit": "iter/sec",
            "range": "stddev: 0.067547",
            "group": "engine",
            "extra": "mean: 1.4714 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-wc-loop]",
            "value": 0.7530156909628805,
            "unit": "iter/sec",
            "range": "stddev: 0.070779",
            "group": "engine",
            "extra": "mean: 1.3280 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-calcjob-loop]",
            "value": 0.16230280267559066,
            "unit": "iter/sec",
            "range": "stddev: 0.081575",
            "group": "engine",
            "extra": "mean: 6.1613 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-calcjob-loop]",
            "value": 0.19141387591580566,
            "unit": "iter/sec",
            "range": "stddev: 0.092410",
            "group": "engine",
            "extra": "mean: 5.2243 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[no-objects]",
            "value": 2.776146241772248,
            "unit": "iter/sec",
            "range": "stddev: 0.050627",
            "group": "import-export",
            "extra": "mean: 360.21 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[with-objects]",
            "value": 2.4729083156939815,
            "unit": "iter/sec",
            "range": "stddev: 0.047293",
            "group": "import-export",
            "extra": "mean: 404.38 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[no-objects]",
            "value": 1.5223719894064385,
            "unit": "iter/sec",
            "range": "stddev: 0.076361",
            "group": "import-export",
            "extra": "mean: 656.87 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[with-objects]",
            "value": 1.4459198357144416,
            "unit": "iter/sec",
            "range": "stddev: 0.060025",
            "group": "import-export",
            "extra": "mean: 691.60 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 1075.3560871898069,
            "unit": "iter/sec",
            "range": "stddev: 0.00012963",
            "group": "node",
            "extra": "mean: 929.92 usec\nrounds: 190"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 224.04122007952833,
            "unit": "iter/sec",
            "range": "stddev: 0.00039825",
            "group": "node",
            "extra": "mean: 4.4635 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 208.11434413398447,
            "unit": "iter/sec",
            "range": "stddev: 0.00037334",
            "group": "node",
            "extra": "mean: 4.8051 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 237.3490477270387,
            "unit": "iter/sec",
            "range": "stddev: 0.00016817",
            "group": "node",
            "extra": "mean: 4.2132 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 45.47150576814014,
            "unit": "iter/sec",
            "range": "stddev: 0.0016497",
            "group": "node",
            "extra": "mean: 21.992 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 45.103615808173664,
            "unit": "iter/sec",
            "range": "stddev: 0.0013234",
            "group": "node",
            "extra": "mean: 22.171 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.60",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "b002a9a9a898a05338ff522b46686657fb468f66",
          "message": "CI: add `pytest` benchmark workflows (#4362)\n\nThe basic steps of the workflow are:\r\n\r\n 1. Run `pytest` to generate JSON data.\r\n\r\nBy default, these tests are switched off (see `pytest.ini`) but to run\r\nthem locally, simply use `pytest tests/benchmark --benchmark-only`. This\r\nruns each test, marked as a benchmark, n-times and records the timing\r\nstatistics (see pytest-benchmark).\r\n\r\nWhen run also with `--benchmark-json benchmark.json`, a JSON file will\r\nalso be created, with all the details about each test.\r\n\r\n 2. Extract information from the above JSON, and also data about the\r\n    system (number of CPUs, etc) and created a \"simplified\" JSON object.\r\n\r\n 3. Read the JSON object from the specified `gh-pages` folder (data.js),\r\n    which contains a list of all these JSON objects.\r\n\r\nThese are split OS and backend.\r\n\r\n 4. If available, compare the new JSON section against the last one to\r\n    be added `data.js`, and comment in the PR and/or fail the workflow\r\n    if the timings have sufficiently degraded, depending on GH action\r\n    configuration.\r\n\r\n 5. If configured, add the new data to `data.js`, update the other\r\n    website assets (HTML/CSS/JS) and commit the updates to `gh-pages`.\r\n\r\nSince at ~7/8 minutes, these tests are slower than standard unit tests,\r\neven with the current fairly conservative tests/# of repetitions, they\r\nare not run by default on each commit. The current solution for this is\r\nto have two workflow jobs:\r\n\r\n  * One runs on every commit to develop, unless it is just updating\r\n    documentation, and will actually update the `gh-pages` data.\r\n  * The second is triggered by a commit to a branch with an open PR to\r\n    `develop`, but only if it includes `[run bench]` in the title of the\r\n    commit message. This will report back the timing data but not update\r\n    `gh-pages`. The idea is that this is run on the final commit of a PR\r\n    that may affect performance.\r\n\r\nOn to the actual tests. They are split into three categories:\r\n\r\n 1. Basic node storage/deletion, i.e. interactions with the ORM\r\n\r\n 2. Runs of workchains with internal (looped) calls to workchains and\r\n    calcjobs. These are duplicated using both a local runner and a\r\n    daemon runner. The daemon runner code is a bit tricky and may break\r\n    once we finalize the move to `asyncio`.\r\n\r\n 3. Expoting/importing archives.",
          "timestamp": "2020-09-16T12:08:59+02:00",
          "url": "https://github.com/aiidateam/aiida-core/commit/b002a9a9a898a05338ff522b46686657fb468f66",
          "distinct": true,
          "tree_id": "8e03787cb2e4a4c359b79b5f53220a496897f0ff"
        },
        "date": 1600251474671,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 4.253485522007583,
            "unit": "iter/sec",
            "range": "stddev: 0.0096440",
            "group": "engine",
            "extra": "mean: 235.10 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 0.9819955856340673,
            "unit": "iter/sec",
            "range": "stddev: 0.045769",
            "group": "engine",
            "extra": "mean: 1.0183 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 1.096031425821652,
            "unit": "iter/sec",
            "range": "stddev: 0.073202",
            "group": "engine",
            "extra": "mean: 912.38 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-calcjob-loop]",
            "value": 0.19155063291137733,
            "unit": "iter/sec",
            "range": "stddev: 0.19108",
            "group": "engine",
            "extra": "mean: 5.2206 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.2411928118654648,
            "unit": "iter/sec",
            "range": "stddev: 0.15721",
            "group": "engine",
            "extra": "mean: 4.1461 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[basic-loop]",
            "value": 3.4545656087324113,
            "unit": "iter/sec",
            "range": "stddev: 0.014122",
            "group": "engine",
            "extra": "mean: 289.47 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-wc-loop]",
            "value": 0.7156299195341463,
            "unit": "iter/sec",
            "range": "stddev: 0.092180",
            "group": "engine",
            "extra": "mean: 1.3974 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-wc-loop]",
            "value": 0.8507450849998501,
            "unit": "iter/sec",
            "range": "stddev: 0.087754",
            "group": "engine",
            "extra": "mean: 1.1754 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-calcjob-loop]",
            "value": 0.17757080452479693,
            "unit": "iter/sec",
            "range": "stddev: 0.21586",
            "group": "engine",
            "extra": "mean: 5.6316 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-calcjob-loop]",
            "value": 0.20646189015520153,
            "unit": "iter/sec",
            "range": "stddev: 0.21376",
            "group": "engine",
            "extra": "mean: 4.8435 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[no-objects]",
            "value": 2.9377776231679587,
            "unit": "iter/sec",
            "range": "stddev: 0.052414",
            "group": "import-export",
            "extra": "mean: 340.39 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[with-objects]",
            "value": 2.9455826926544897,
            "unit": "iter/sec",
            "range": "stddev: 0.023082",
            "group": "import-export",
            "extra": "mean: 339.49 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[no-objects]",
            "value": 1.8159879943495707,
            "unit": "iter/sec",
            "range": "stddev: 0.091071",
            "group": "import-export",
            "extra": "mean: 550.66 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[with-objects]",
            "value": 1.7370794416730717,
            "unit": "iter/sec",
            "range": "stddev: 0.063497",
            "group": "import-export",
            "extra": "mean: 575.68 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 1298.479572323654,
            "unit": "iter/sec",
            "range": "stddev: 0.00012266",
            "group": "node",
            "extra": "mean: 770.13 usec\nrounds: 219"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 271.55205458948456,
            "unit": "iter/sec",
            "range": "stddev: 0.00048660",
            "group": "node",
            "extra": "mean: 3.6825 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 244.43934796008858,
            "unit": "iter/sec",
            "range": "stddev: 0.00047707",
            "group": "node",
            "extra": "mean: 4.0910 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 260.3268552570303,
            "unit": "iter/sec",
            "range": "stddev: 0.00048508",
            "group": "node",
            "extra": "mean: 3.8413 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 57.29628224625742,
            "unit": "iter/sec",
            "range": "stddev: 0.0013926",
            "group": "node",
            "extra": "mean: 17.453 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 53.79799901720639,
            "unit": "iter/sec",
            "range": "stddev: 0.0022363",
            "group": "node",
            "extra": "mean: 18.588 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.30",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "ff7b9e630967a4aece8f7dd75c052366920cd94e",
          "message": "CI: skip the code tests if only docs have been touched (#4377)\n\nThis requires splitting the `pre-commit` and `tests` steps in separate workflows.",
          "timestamp": "2020-09-17T16:29:39+02:00",
          "url": "https://github.com/aiidateam/aiida-core/commit/ff7b9e630967a4aece8f7dd75c052366920cd94e",
          "distinct": true,
          "tree_id": "b8041b87e944622fd71abeba4dd0bea3ad0a62e8"
        },
        "date": 1600353601753,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 3.052405369009012,
            "unit": "iter/sec",
            "range": "stddev: 0.059174",
            "group": "engine",
            "extra": "mean: 327.61 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 0.747493912702228,
            "unit": "iter/sec",
            "range": "stddev: 0.056818",
            "group": "engine",
            "extra": "mean: 1.3378 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 0.850002949786485,
            "unit": "iter/sec",
            "range": "stddev: 0.069062",
            "group": "engine",
            "extra": "mean: 1.1765 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-calcjob-loop]",
            "value": 0.16472566455837992,
            "unit": "iter/sec",
            "range": "stddev: 0.12551",
            "group": "engine",
            "extra": "mean: 6.0707 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.19237622944704902,
            "unit": "iter/sec",
            "range": "stddev: 0.11696",
            "group": "engine",
            "extra": "mean: 5.1981 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[basic-loop]",
            "value": 2.4664510400619792,
            "unit": "iter/sec",
            "range": "stddev: 0.015685",
            "group": "engine",
            "extra": "mean: 405.44 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-wc-loop]",
            "value": 0.5815126219805515,
            "unit": "iter/sec",
            "range": "stddev: 0.082375",
            "group": "engine",
            "extra": "mean: 1.7197 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-wc-loop]",
            "value": 0.6689434022017837,
            "unit": "iter/sec",
            "range": "stddev: 0.083968",
            "group": "engine",
            "extra": "mean: 1.4949 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-calcjob-loop]",
            "value": 0.1488323377427367,
            "unit": "iter/sec",
            "range": "stddev: 0.18649",
            "group": "engine",
            "extra": "mean: 6.7190 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-calcjob-loop]",
            "value": 0.17283093167484256,
            "unit": "iter/sec",
            "range": "stddev: 0.20175",
            "group": "engine",
            "extra": "mean: 5.7860 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[no-objects]",
            "value": 2.4785726531795005,
            "unit": "iter/sec",
            "range": "stddev: 0.047006",
            "group": "import-export",
            "extra": "mean: 403.46 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[with-objects]",
            "value": 2.2411517962782486,
            "unit": "iter/sec",
            "range": "stddev: 0.052841",
            "group": "import-export",
            "extra": "mean: 446.20 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[no-objects]",
            "value": 1.333923890193002,
            "unit": "iter/sec",
            "range": "stddev: 0.051356",
            "group": "import-export",
            "extra": "mean: 749.67 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[with-objects]",
            "value": 1.1955050683138466,
            "unit": "iter/sec",
            "range": "stddev: 0.068772",
            "group": "import-export",
            "extra": "mean: 836.47 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 863.1522040271751,
            "unit": "iter/sec",
            "range": "stddev: 0.00012213",
            "group": "node",
            "extra": "mean: 1.1585 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 182.04592429154616,
            "unit": "iter/sec",
            "range": "stddev: 0.0010625",
            "group": "node",
            "extra": "mean: 5.4931 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 171.84186285721626,
            "unit": "iter/sec",
            "range": "stddev: 0.0011531",
            "group": "node",
            "extra": "mean: 5.8193 msec\nrounds: 112"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 186.35474619194733,
            "unit": "iter/sec",
            "range": "stddev: 0.0012926",
            "group": "node",
            "extra": "mean: 5.3661 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 38.570897339961164,
            "unit": "iter/sec",
            "range": "stddev: 0.0023479",
            "group": "node",
            "extra": "mean: 25.926 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 39.8278047728269,
            "unit": "iter/sec",
            "range": "stddev: 0.0015426",
            "group": "node",
            "extra": "mean: 25.108 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.40",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "9dfad2efbe9603957a54d0123a3cec2ee48b54bd",
          "message": "`CalcJob`: allow nested target paths for `local_copy_list` (#4373)\n\nIf a `CalcJob` would specify a `local_copy_list` containing an entry\r\nwhere the target remote path contains nested subdirectories, the\r\n`upload_calculation` would except unless all subdirectories would\r\nalready exist. To solve this, one could have added a transport call that\r\nwould create the directories if the target path is nested. However, this\r\nwould risk being very inefficient if there are many local copy list\r\ninstructions with relative path, where each would incurr a command over\r\nthe transport.\r\n\r\nInstead, we change the design and simply apply the local copy list\r\ninstructions to the sandbox folder on the local file system. This also\r\nat the same time allows us to get rid of the inefficient workaround of\r\nwriting the file to a temporary file, because the transport interface\r\ndoesn't accept filelike objects and the file repository does not expose\r\nfilepaths on the local file system.\r\n\r\nThe only additional thing to take care of is to make sure the files from\r\nthe local copy list do not end up in the repository of the node, which\r\nwas the whole point of the `local_copy_list`'s existence in the first\r\nplace. But this is solved by simply adding each file, that is added to\r\nthe sandbox, also to the `provenance_exclude_list`.",
          "timestamp": "2020-09-17T21:24:38+02:00",
          "url": "https://github.com/aiidateam/aiida-core/commit/9dfad2efbe9603957a54d0123a3cec2ee48b54bd",
          "distinct": true,
          "tree_id": "34c4cb969fd8157bfee60e0c77a0fb2e9eceeb11"
        },
        "date": 1600371213400,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 3.5455546923220993,
            "unit": "iter/sec",
            "range": "stddev: 0.011465",
            "group": "engine",
            "extra": "mean: 282.04 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 0.8301167835386116,
            "unit": "iter/sec",
            "range": "stddev: 0.052039",
            "group": "engine",
            "extra": "mean: 1.2046 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 0.9184419849982657,
            "unit": "iter/sec",
            "range": "stddev: 0.052723",
            "group": "engine",
            "extra": "mean: 1.0888 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-calcjob-loop]",
            "value": 0.18820800896578022,
            "unit": "iter/sec",
            "range": "stddev: 0.21967",
            "group": "engine",
            "extra": "mean: 5.3133 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.22276980710592312,
            "unit": "iter/sec",
            "range": "stddev: 0.079354",
            "group": "engine",
            "extra": "mean: 4.4889 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[basic-loop]",
            "value": 3.011984989169322,
            "unit": "iter/sec",
            "range": "stddev: 0.0096648",
            "group": "engine",
            "extra": "mean: 332.01 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-wc-loop]",
            "value": 0.6941568585359182,
            "unit": "iter/sec",
            "range": "stddev: 0.059039",
            "group": "engine",
            "extra": "mean: 1.4406 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-wc-loop]",
            "value": 0.7885806318147882,
            "unit": "iter/sec",
            "range": "stddev: 0.060858",
            "group": "engine",
            "extra": "mean: 1.2681 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-calcjob-loop]",
            "value": 0.1736456951142886,
            "unit": "iter/sec",
            "range": "stddev: 0.17612",
            "group": "engine",
            "extra": "mean: 5.7589 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-calcjob-loop]",
            "value": 0.20675621390918036,
            "unit": "iter/sec",
            "range": "stddev: 0.11764",
            "group": "engine",
            "extra": "mean: 4.8366 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[no-objects]",
            "value": 2.9050800836924666,
            "unit": "iter/sec",
            "range": "stddev: 0.040693",
            "group": "import-export",
            "extra": "mean: 344.22 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[with-objects]",
            "value": 2.548746504740905,
            "unit": "iter/sec",
            "range": "stddev: 0.041815",
            "group": "import-export",
            "extra": "mean: 392.35 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[no-objects]",
            "value": 1.4747681562207522,
            "unit": "iter/sec",
            "range": "stddev: 0.053779",
            "group": "import-export",
            "extra": "mean: 678.07 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[with-objects]",
            "value": 1.404932341397106,
            "unit": "iter/sec",
            "range": "stddev: 0.034949",
            "group": "import-export",
            "extra": "mean: 711.78 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 948.4507739428419,
            "unit": "iter/sec",
            "range": "stddev: 0.00022510",
            "group": "node",
            "extra": "mean: 1.0544 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 214.37453120620197,
            "unit": "iter/sec",
            "range": "stddev: 0.00049472",
            "group": "node",
            "extra": "mean: 4.6647 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 198.40293242549149,
            "unit": "iter/sec",
            "range": "stddev: 0.00091640",
            "group": "node",
            "extra": "mean: 5.0402 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 214.29977847396896,
            "unit": "iter/sec",
            "range": "stddev: 0.00077403",
            "group": "node",
            "extra": "mean: 4.6664 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 44.012183440297626,
            "unit": "iter/sec",
            "range": "stddev: 0.013871",
            "group": "node",
            "extra": "mean: 22.721 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 45.967644831061044,
            "unit": "iter/sec",
            "range": "stddev: 0.0043839",
            "group": "node",
            "extra": "mean: 21.754 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.40",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "c6bca066106c8ee92178923ea3a0b6ab0b3657e2",
          "message": "Update citations in `README.md` and documentation landing page (#4371)\n\nThe second AiiDA paper was published in Scientific Data on September 8,\r\n2020. The suggested citations are updated, where the original AiiDA\r\npaper is kept to be cited when people use AiiDA with version before v1.0\r\nor if they reference the original ADES model.",
          "timestamp": "2020-09-17T22:54:58+02:00",
          "url": "https://github.com/aiidateam/aiida-core/commit/c6bca066106c8ee92178923ea3a0b6ab0b3657e2",
          "distinct": true,
          "tree_id": "addd54026c8c291ac762ce912658ed8020e88a10"
        },
        "date": 1600376760010,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 3.2028089085083016,
            "unit": "iter/sec",
            "range": "stddev: 0.051854",
            "group": "engine",
            "extra": "mean: 312.23 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 0.7816444990930592,
            "unit": "iter/sec",
            "range": "stddev: 0.057633",
            "group": "engine",
            "extra": "mean: 1.2794 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 0.8777224506620797,
            "unit": "iter/sec",
            "range": "stddev: 0.057412",
            "group": "engine",
            "extra": "mean: 1.1393 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-calcjob-loop]",
            "value": 0.16734201213002464,
            "unit": "iter/sec",
            "range": "stddev: 0.17991",
            "group": "engine",
            "extra": "mean: 5.9758 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.17931749201026376,
            "unit": "iter/sec",
            "range": "stddev: 0.26867",
            "group": "engine",
            "extra": "mean: 5.5767 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[basic-loop]",
            "value": 2.2184465592851392,
            "unit": "iter/sec",
            "range": "stddev: 0.0099670",
            "group": "engine",
            "extra": "mean: 450.77 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-wc-loop]",
            "value": 0.5210386847741257,
            "unit": "iter/sec",
            "range": "stddev: 0.062579",
            "group": "engine",
            "extra": "mean: 1.9192 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-wc-loop]",
            "value": 0.5759746453049014,
            "unit": "iter/sec",
            "range": "stddev: 0.067281",
            "group": "engine",
            "extra": "mean: 1.7362 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-calcjob-loop]",
            "value": 0.1349526267765222,
            "unit": "iter/sec",
            "range": "stddev: 0.54675",
            "group": "engine",
            "extra": "mean: 7.4100 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-calcjob-loop]",
            "value": 0.16406929663790668,
            "unit": "iter/sec",
            "range": "stddev: 0.20675",
            "group": "engine",
            "extra": "mean: 6.0950 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[no-objects]",
            "value": 2.376770548902688,
            "unit": "iter/sec",
            "range": "stddev: 0.075646",
            "group": "import-export",
            "extra": "mean: 420.74 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[with-objects]",
            "value": 2.2243247144933167,
            "unit": "iter/sec",
            "range": "stddev: 0.011483",
            "group": "import-export",
            "extra": "mean: 449.57 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[no-objects]",
            "value": 1.2626605311587074,
            "unit": "iter/sec",
            "range": "stddev: 0.062371",
            "group": "import-export",
            "extra": "mean: 791.98 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[with-objects]",
            "value": 1.1383251510492631,
            "unit": "iter/sec",
            "range": "stddev: 0.074461",
            "group": "import-export",
            "extra": "mean: 878.48 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 852.6912189222295,
            "unit": "iter/sec",
            "range": "stddev: 0.00025554",
            "group": "node",
            "extra": "mean: 1.1728 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 174.70754747703987,
            "unit": "iter/sec",
            "range": "stddev: 0.0012948",
            "group": "node",
            "extra": "mean: 5.7239 msec\nrounds: 106"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 157.62516150110454,
            "unit": "iter/sec",
            "range": "stddev: 0.0012624",
            "group": "node",
            "extra": "mean: 6.3442 msec\nrounds: 106"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 169.3372815472662,
            "unit": "iter/sec",
            "range": "stddev: 0.0011863",
            "group": "node",
            "extra": "mean: 5.9054 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 34.42463165676325,
            "unit": "iter/sec",
            "range": "stddev: 0.011567",
            "group": "node",
            "extra": "mean: 29.049 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 33.64746073286811,
            "unit": "iter/sec",
            "range": "stddev: 0.0038957",
            "group": "node",
            "extra": "mean: 29.720 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.60",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "12be9ad0c5abae1cff3bc62f838432b5c5502aa3",
          "message": "Depedencies: remove upper limit and allow `numpy~=1.17` (#4378)\n\nThe limit was introduced in `f5d6cba2baf0e7ca69b742f7e76d8a8bbcca85ae`\r\nbecause of a broken pre-release. Now that a stable release is out, the\r\nrequirement is relax to allow newer versions as well. Note that we keep\r\nthe minimum requirement of `numpy==1.17` following AEP 003.\r\n\r\nOne change had to be applied in the code to make it compatible with newer\r\nversions of `numpy`. In the legacy kpoints implementation, the entries\r\nin `num_points` are of type `numpy.float64` for recent versions of\r\n`numpy`, but need to be integers so they can be used for indexing in\r\n`numpy.linspace()` calls.",
          "timestamp": "2020-09-19T11:16:21+02:00",
          "url": "https://github.com/aiidateam/aiida-core/commit/12be9ad0c5abae1cff3bc62f838432b5c5502aa3",
          "distinct": true,
          "tree_id": "22e059003dee06efa0201a155395535159e1b1c4"
        },
        "date": 1600507556191,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 3.344800629974165,
            "unit": "iter/sec",
            "range": "stddev: 0.059721",
            "group": "engine",
            "extra": "mean: 298.97 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 0.8150232322841078,
            "unit": "iter/sec",
            "range": "stddev: 0.093079",
            "group": "engine",
            "extra": "mean: 1.2270 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 0.9344990177515895,
            "unit": "iter/sec",
            "range": "stddev: 0.065640",
            "group": "engine",
            "extra": "mean: 1.0701 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-calcjob-loop]",
            "value": 0.18147474362099522,
            "unit": "iter/sec",
            "range": "stddev: 0.099536",
            "group": "engine",
            "extra": "mean: 5.5104 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.21063003020702353,
            "unit": "iter/sec",
            "range": "stddev: 0.12854",
            "group": "engine",
            "extra": "mean: 4.7477 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[basic-loop]",
            "value": 2.696189056075647,
            "unit": "iter/sec",
            "range": "stddev: 0.0090902",
            "group": "engine",
            "extra": "mean: 370.89 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-wc-loop]",
            "value": 0.6470522574638561,
            "unit": "iter/sec",
            "range": "stddev: 0.075124",
            "group": "engine",
            "extra": "mean: 1.5455 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-wc-loop]",
            "value": 0.7389230067288999,
            "unit": "iter/sec",
            "range": "stddev: 0.064028",
            "group": "engine",
            "extra": "mean: 1.3533 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-calcjob-loop]",
            "value": 0.15829912205053331,
            "unit": "iter/sec",
            "range": "stddev: 0.12401",
            "group": "engine",
            "extra": "mean: 6.3172 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-calcjob-loop]",
            "value": 0.1882210115246498,
            "unit": "iter/sec",
            "range": "stddev: 0.098882",
            "group": "engine",
            "extra": "mean: 5.3129 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[no-objects]",
            "value": 2.842851159372997,
            "unit": "iter/sec",
            "range": "stddev: 0.0085140",
            "group": "import-export",
            "extra": "mean: 351.76 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[with-objects]",
            "value": 2.450170263577049,
            "unit": "iter/sec",
            "range": "stddev: 0.059245",
            "group": "import-export",
            "extra": "mean: 408.13 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[no-objects]",
            "value": 1.5353854103269027,
            "unit": "iter/sec",
            "range": "stddev: 0.058613",
            "group": "import-export",
            "extra": "mean: 651.30 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[with-objects]",
            "value": 1.435866097739431,
            "unit": "iter/sec",
            "range": "stddev: 0.065159",
            "group": "import-export",
            "extra": "mean: 696.44 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 1056.322600629029,
            "unit": "iter/sec",
            "range": "stddev: 0.00027044",
            "group": "node",
            "extra": "mean: 946.68 usec\nrounds: 205"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 230.05346958141845,
            "unit": "iter/sec",
            "range": "stddev: 0.00022683",
            "group": "node",
            "extra": "mean: 4.3468 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 208.95354931707183,
            "unit": "iter/sec",
            "range": "stddev: 0.00061886",
            "group": "node",
            "extra": "mean: 4.7858 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 232.45866614676513,
            "unit": "iter/sec",
            "range": "stddev: 0.00018041",
            "group": "node",
            "extra": "mean: 4.3018 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 43.49050620776782,
            "unit": "iter/sec",
            "range": "stddev: 0.0020977",
            "group": "node",
            "extra": "mean: 22.994 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 42.8729603029972,
            "unit": "iter/sec",
            "range": "stddev: 0.0045629",
            "group": "node",
            "extra": "mean: 23.325 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.60",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "8dec3265835dd9f335aaa43cfe5537cb5409ccc3",
          "message": "ORM: move attributes/extras methods of frontend node to mixins\n\nMove all methods related to attributes and extras from the frontend\n`Node` class to separate mixin classes called `EntityAttributesMixin`\nand `EntityExtrasMixin`. This makes it easier to add these methods to\nother frontend entity classes and makes the code more maintainable.",
          "timestamp": "2020-09-22T11:12:38+02:00",
          "url": "https://github.com/aiidateam/aiida-core/commit/8dec3265835dd9f335aaa43cfe5537cb5409ccc3",
          "distinct": true,
          "tree_id": "01ead6eb7a823398ea56eb35279fe29baed056bc"
        },
        "date": 1600766439347,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 3.7030295562010602,
            "unit": "iter/sec",
            "range": "stddev: 0.062427",
            "group": "engine",
            "extra": "mean: 270.05 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 1.120622577274643,
            "unit": "iter/sec",
            "range": "stddev: 0.050711",
            "group": "engine",
            "extra": "mean: 892.36 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 1.218439677266332,
            "unit": "iter/sec",
            "range": "stddev: 0.045220",
            "group": "engine",
            "extra": "mean: 820.72 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-calcjob-loop]",
            "value": 0.22309614567820368,
            "unit": "iter/sec",
            "range": "stddev: 0.15745",
            "group": "engine",
            "extra": "mean: 4.4824 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.2491372171634877,
            "unit": "iter/sec",
            "range": "stddev: 0.29888",
            "group": "engine",
            "extra": "mean: 4.0139 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[basic-loop]",
            "value": 3.579066792084533,
            "unit": "iter/sec",
            "range": "stddev: 0.015163",
            "group": "engine",
            "extra": "mean: 279.40 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-wc-loop]",
            "value": 0.8584676159402337,
            "unit": "iter/sec",
            "range": "stddev: 0.038263",
            "group": "engine",
            "extra": "mean: 1.1649 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-wc-loop]",
            "value": 0.9690061138634571,
            "unit": "iter/sec",
            "range": "stddev: 0.052048",
            "group": "engine",
            "extra": "mean: 1.0320 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-calcjob-loop]",
            "value": 0.19550823954641414,
            "unit": "iter/sec",
            "range": "stddev: 0.26278",
            "group": "engine",
            "extra": "mean: 5.1149 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-calcjob-loop]",
            "value": 0.24091053173311136,
            "unit": "iter/sec",
            "range": "stddev: 0.089288",
            "group": "engine",
            "extra": "mean: 4.1509 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[no-objects]",
            "value": 3.5130177538369587,
            "unit": "iter/sec",
            "range": "stddev: 0.038747",
            "group": "import-export",
            "extra": "mean: 284.66 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[with-objects]",
            "value": 2.940944946859705,
            "unit": "iter/sec",
            "range": "stddev: 0.043883",
            "group": "import-export",
            "extra": "mean: 340.03 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[no-objects]",
            "value": 1.8597952638711188,
            "unit": "iter/sec",
            "range": "stddev: 0.056986",
            "group": "import-export",
            "extra": "mean: 537.69 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[with-objects]",
            "value": 1.413553046221311,
            "unit": "iter/sec",
            "range": "stddev: 0.32421",
            "group": "import-export",
            "extra": "mean: 707.44 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 1309.6910835772603,
            "unit": "iter/sec",
            "range": "stddev: 0.00013147",
            "group": "node",
            "extra": "mean: 763.54 usec\nrounds: 220"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 272.8825225344187,
            "unit": "iter/sec",
            "range": "stddev: 0.00043824",
            "group": "node",
            "extra": "mean: 3.6646 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 266.4244854430115,
            "unit": "iter/sec",
            "range": "stddev: 0.00039161",
            "group": "node",
            "extra": "mean: 3.7534 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 285.1663816940715,
            "unit": "iter/sec",
            "range": "stddev: 0.00047007",
            "group": "node",
            "extra": "mean: 3.5067 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 55.888049646260384,
            "unit": "iter/sec",
            "range": "stddev: 0.0023618",
            "group": "node",
            "extra": "mean: 17.893 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 55.96813395189252,
            "unit": "iter/sec",
            "range": "stddev: 0.0021034",
            "group": "node",
            "extra": "mean: 17.867 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.30",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "93bde426fd0f083d3b9750beaa926acb4827c098",
          "message": "`CalcJob`: improve logging in `parse_scheduler_output` (#4370)\n\nThe level of the log that is fired if no detailed job info is available\r\nis changed from `WARNING` to `INFO`. Since not all schedulers implement\r\nthe feature of retrieving this detailed job info, such as the often used\r\n`DirectScheduler`, using a warning is not very apt. If the information\r\nis missing, nothing is necessarily wrong, so `INFO` is better suited.\r\n\r\nOn the contrary, if the `Scheduler.parse_output` excepts, that is grave\r\nand so its level is changed from a warning to an error.\r\n\r\nFinally, a new condition is added where the scheduler does implement the\r\nmethod to retrieve the detailed job info, but the command fails. In this\r\ncase, the return value will be non-zero. This value is now checked\r\nexplicitly and if the case, a info log is fired and the detailed job\r\ninfo is set to `None`, which will cause the parsing to be skipped. This\r\ncase can for example arise when using the `SlurmScheduler` plugin, which\r\ndoes implement the detailed job info feature, however, not all SLURM\r\ninstallations have the job accounting feature enabled, which is required\r\nby the plugin.",
          "timestamp": "2020-09-22T17:46:41+02:00",
          "url": "https://github.com/aiidateam/aiida-core/commit/93bde426fd0f083d3b9750beaa926acb4827c098",
          "distinct": true,
          "tree_id": "022ffb9297511577b5e0e96793fe5b2a8d625f3a"
        },
        "date": 1600790214347,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 3.0156967107280144,
            "unit": "iter/sec",
            "range": "stddev: 0.053084",
            "group": "engine",
            "extra": "mean: 331.60 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 0.7479718598101721,
            "unit": "iter/sec",
            "range": "stddev: 0.041173",
            "group": "engine",
            "extra": "mean: 1.3369 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 0.8396441525914063,
            "unit": "iter/sec",
            "range": "stddev: 0.050649",
            "group": "engine",
            "extra": "mean: 1.1910 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-calcjob-loop]",
            "value": 0.1673596092825779,
            "unit": "iter/sec",
            "range": "stddev: 0.082263",
            "group": "engine",
            "extra": "mean: 5.9752 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.18985153517643355,
            "unit": "iter/sec",
            "range": "stddev: 0.098723",
            "group": "engine",
            "extra": "mean: 5.2673 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[basic-loop]",
            "value": 2.460516457788508,
            "unit": "iter/sec",
            "range": "stddev: 0.013842",
            "group": "engine",
            "extra": "mean: 406.42 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-wc-loop]",
            "value": 0.5948234862732077,
            "unit": "iter/sec",
            "range": "stddev: 0.084459",
            "group": "engine",
            "extra": "mean: 1.6812 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-wc-loop]",
            "value": 0.7062916898240174,
            "unit": "iter/sec",
            "range": "stddev: 0.054010",
            "group": "engine",
            "extra": "mean: 1.4158 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-calcjob-loop]",
            "value": 0.15466720013800928,
            "unit": "iter/sec",
            "range": "stddev: 0.12108",
            "group": "engine",
            "extra": "mean: 6.4655 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-calcjob-loop]",
            "value": 0.17493542815401686,
            "unit": "iter/sec",
            "range": "stddev: 0.11452",
            "group": "engine",
            "extra": "mean: 5.7164 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[no-objects]",
            "value": 2.3740988596851635,
            "unit": "iter/sec",
            "range": "stddev: 0.050302",
            "group": "import-export",
            "extra": "mean: 421.21 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[with-objects]",
            "value": 2.153937420427235,
            "unit": "iter/sec",
            "range": "stddev: 0.057080",
            "group": "import-export",
            "extra": "mean: 464.27 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[no-objects]",
            "value": 1.3004999254256309,
            "unit": "iter/sec",
            "range": "stddev: 0.065728",
            "group": "import-export",
            "extra": "mean: 768.94 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[with-objects]",
            "value": 1.235735172737607,
            "unit": "iter/sec",
            "range": "stddev: 0.059276",
            "group": "import-export",
            "extra": "mean: 809.23 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 895.8183303361661,
            "unit": "iter/sec",
            "range": "stddev: 0.00016324",
            "group": "node",
            "extra": "mean: 1.1163 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 198.27100817629213,
            "unit": "iter/sec",
            "range": "stddev: 0.00038466",
            "group": "node",
            "extra": "mean: 5.0436 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 188.86150629328972,
            "unit": "iter/sec",
            "range": "stddev: 0.00036439",
            "group": "node",
            "extra": "mean: 5.2949 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 198.7673735506204,
            "unit": "iter/sec",
            "range": "stddev: 0.00048060",
            "group": "node",
            "extra": "mean: 5.0310 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 39.59031573875069,
            "unit": "iter/sec",
            "range": "stddev: 0.0054481",
            "group": "node",
            "extra": "mean: 25.259 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 38.40221877574525,
            "unit": "iter/sec",
            "range": "stddev: 0.0018626",
            "group": "node",
            "extra": "mean: 26.040 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.30",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "aa3b009870a674b11e66e46c49b6246114773a32",
          "message": "`BaseRestartWorkChain`: do not run `process_handler` when `exit_codes=[]`. (#4380)\n\nWhen a `process_handler` explicitly gets passed an empty `exit_codes`\r\nlist, it would previously always run. This is now changed to not run the\r\nhandler instead.\r\n\r\nThe reason for this change is that it is more consistent with the\r\nsemantics of passing a list of exit codes, where it only triggers if the\r\nchild process has any of the listed exit codes.",
          "timestamp": "2020-09-23T08:59:19+02:00",
          "url": "https://github.com/aiidateam/aiida-core/commit/aa3b009870a674b11e66e46c49b6246114773a32",
          "distinct": true,
          "tree_id": "cde9ac6e7706ddca3ce79243987469df56b25e4d"
        },
        "date": 1600845072352,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 2.7400321362806497,
            "unit": "iter/sec",
            "range": "stddev: 0.026817",
            "group": "engine",
            "extra": "mean: 364.96 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 0.6395450825166159,
            "unit": "iter/sec",
            "range": "stddev: 0.074271",
            "group": "engine",
            "extra": "mean: 1.5636 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 0.7101962135972236,
            "unit": "iter/sec",
            "range": "stddev: 0.10311",
            "group": "engine",
            "extra": "mean: 1.4081 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-calcjob-loop]",
            "value": 0.14521332559232478,
            "unit": "iter/sec",
            "range": "stddev: 0.17071",
            "group": "engine",
            "extra": "mean: 6.8864 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.16146232502822705,
            "unit": "iter/sec",
            "range": "stddev: 0.18342",
            "group": "engine",
            "extra": "mean: 6.1934 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[basic-loop]",
            "value": 1.9794551079575964,
            "unit": "iter/sec",
            "range": "stddev: 0.061633",
            "group": "engine",
            "extra": "mean: 505.19 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-wc-loop]",
            "value": 0.4941873150085818,
            "unit": "iter/sec",
            "range": "stddev: 0.085180",
            "group": "engine",
            "extra": "mean: 2.0235 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-wc-loop]",
            "value": 0.5590773274170094,
            "unit": "iter/sec",
            "range": "stddev: 0.098706",
            "group": "engine",
            "extra": "mean: 1.7887 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-calcjob-loop]",
            "value": 0.12653535806505994,
            "unit": "iter/sec",
            "range": "stddev: 0.18258",
            "group": "engine",
            "extra": "mean: 7.9029 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-calcjob-loop]",
            "value": 0.14760305277484023,
            "unit": "iter/sec",
            "range": "stddev: 0.24395",
            "group": "engine",
            "extra": "mean: 6.7749 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[no-objects]",
            "value": 2.1195282283983152,
            "unit": "iter/sec",
            "range": "stddev: 0.044057",
            "group": "import-export",
            "extra": "mean: 471.80 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[with-objects]",
            "value": 2.0407826258515156,
            "unit": "iter/sec",
            "range": "stddev: 0.024443",
            "group": "import-export",
            "extra": "mean: 490.01 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[no-objects]",
            "value": 1.153345480362809,
            "unit": "iter/sec",
            "range": "stddev: 0.076998",
            "group": "import-export",
            "extra": "mean: 867.04 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[with-objects]",
            "value": 1.0737893335187132,
            "unit": "iter/sec",
            "range": "stddev: 0.056197",
            "group": "import-export",
            "extra": "mean: 931.28 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 707.1480155975796,
            "unit": "iter/sec",
            "range": "stddev: 0.00071814",
            "group": "node",
            "extra": "mean: 1.4141 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 171.32282001936946,
            "unit": "iter/sec",
            "range": "stddev: 0.0010015",
            "group": "node",
            "extra": "mean: 5.8369 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 163.47907791027353,
            "unit": "iter/sec",
            "range": "stddev: 0.0010944",
            "group": "node",
            "extra": "mean: 6.1170 msec\nrounds: 105"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 162.6524804383577,
            "unit": "iter/sec",
            "range": "stddev: 0.0015725",
            "group": "node",
            "extra": "mean: 6.1481 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 33.88994732974318,
            "unit": "iter/sec",
            "range": "stddev: 0.0044131",
            "group": "node",
            "extra": "mean: 29.507 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 32.832168481427644,
            "unit": "iter/sec",
            "range": "stddev: 0.018752",
            "group": "node",
            "extra": "mean: 30.458 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.40",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "ac0d55995ef6620e61ba1bb25bc1df5d23ff1778",
          "message": "Prepare the code for the new repository implementation (#4344)\n\nIn `v2.0.0`, the new repository implementation will be shipped, that\r\ndespite our best efforts, requires some slight backwards-incompatible\r\nchanges to the interface. The envisioned changes are translated as\r\ndeprecation warnings:\r\n\r\n * `FileType`: `aiida.orm.utils.repository` ->`aiida.repository.common`\r\n * `File`: `aiida.orm.utils.repository` ->`aiida.repository.common`\r\n * `File`: changed from namedtuple to class\r\n * `File`: iteration is deprecated\r\n * `File`: `type` attribute -> `file_type`\r\n * `Node.put_object_from_tree`: `path` -> `filepath`\r\n * `Node.put_object_from_file`: `path` -> `filepath`\r\n * `Node.put_object_from_tree`: `key` -> `path`\r\n * `Node.put_object_from_file`: `key` -> `path`\r\n * `Node.put_object_from_filelike`: `key` -> `path`\r\n * `Node.get_object`: `key` -> `path`\r\n * `Node.get_object_content`: `key` -> `path`\r\n * `Node.open`: `key` -> `path`\r\n * `Node.list_objects`: `key` -> `path`\r\n * `Node.list_object_names`: `key` -> `path`\r\n * `SinglefileData.open`: `key` -> `path`\r\n * Deprecated use of `Node.open` without context manager\r\n * Deprecated any other mode than `r` and `rb` in the methods:\r\n    o `Node.open`\r\n    o `Node.get_object_content`\r\n * Deprecated `contents_only` in `put_object_from_tree`\r\n * Deprecated `force` argument in\r\n    o `Node.put_object_from_tree`\r\n    o `Node.put_object_from_file`\r\n    o `Node.put_object_from_filelike`\r\n    o `Node.delete_object`\r\n\r\nThe special case is the `Repository` class of the internal module\r\n`aiida.orm.utils.repository`. Even though it is not part of the public\r\nAPI, plugins may have been using it. To allow deprecation warnings to be\r\nprinted when the module or class is used, we move the content to a\r\nmirror module `aiida.orm.utils._repository`, that is then used\r\ninternally, and the original module has the deprecation warning. This\r\nway clients will see the warning if they use it, but use in `aiida-core`\r\nwill not trigger them. Since there won't be a replacement for this class\r\nin the new implementation, it can also not be replaced or forwarded.",
          "timestamp": "2020-09-23T11:33:51+02:00",
          "url": "https://github.com/aiidateam/aiida-core/commit/ac0d55995ef6620e61ba1bb25bc1df5d23ff1778",
          "distinct": true,
          "tree_id": "51b4c19e8fbbe39ce6b68033fd9a518beb2868f5"
        },
        "date": 1600854231119,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 3.2661096035416692,
            "unit": "iter/sec",
            "range": "stddev: 0.051293",
            "group": "engine",
            "extra": "mean: 306.17 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 0.8231333598993732,
            "unit": "iter/sec",
            "range": "stddev: 0.044388",
            "group": "engine",
            "extra": "mean: 1.2149 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 0.9124880027959416,
            "unit": "iter/sec",
            "range": "stddev: 0.071459",
            "group": "engine",
            "extra": "mean: 1.0959 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-calcjob-loop]",
            "value": 0.17395258584157772,
            "unit": "iter/sec",
            "range": "stddev: 0.10657",
            "group": "engine",
            "extra": "mean: 5.7487 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.19968134656624675,
            "unit": "iter/sec",
            "range": "stddev: 0.12060",
            "group": "engine",
            "extra": "mean: 5.0080 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[basic-loop]",
            "value": 2.6677996448936363,
            "unit": "iter/sec",
            "range": "stddev: 0.020160",
            "group": "engine",
            "extra": "mean: 374.84 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-wc-loop]",
            "value": 0.6404791588344926,
            "unit": "iter/sec",
            "range": "stddev: 0.067057",
            "group": "engine",
            "extra": "mean: 1.5613 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-wc-loop]",
            "value": 0.7337289373824082,
            "unit": "iter/sec",
            "range": "stddev: 0.053662",
            "group": "engine",
            "extra": "mean: 1.3629 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-calcjob-loop]",
            "value": 0.1547052148724866,
            "unit": "iter/sec",
            "range": "stddev: 0.11792",
            "group": "engine",
            "extra": "mean: 6.4639 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-calcjob-loop]",
            "value": 0.17983024048927493,
            "unit": "iter/sec",
            "range": "stddev: 0.12186",
            "group": "engine",
            "extra": "mean: 5.5608 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[no-objects]",
            "value": 2.4698600025205897,
            "unit": "iter/sec",
            "range": "stddev: 0.044540",
            "group": "import-export",
            "extra": "mean: 404.88 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[with-objects]",
            "value": 2.197152625322471,
            "unit": "iter/sec",
            "range": "stddev: 0.051664",
            "group": "import-export",
            "extra": "mean: 455.13 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[no-objects]",
            "value": 1.3251625051556375,
            "unit": "iter/sec",
            "range": "stddev: 0.068518",
            "group": "import-export",
            "extra": "mean: 754.62 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[with-objects]",
            "value": 1.2266824630329332,
            "unit": "iter/sec",
            "range": "stddev: 0.050193",
            "group": "import-export",
            "extra": "mean: 815.21 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 918.9177475541755,
            "unit": "iter/sec",
            "range": "stddev: 0.00029877",
            "group": "node",
            "extra": "mean: 1.0882 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 189.4843943629555,
            "unit": "iter/sec",
            "range": "stddev: 0.00060897",
            "group": "node",
            "extra": "mean: 5.2775 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 184.164390772691,
            "unit": "iter/sec",
            "range": "stddev: 0.0011616",
            "group": "node",
            "extra": "mean: 5.4299 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 193.69155364651922,
            "unit": "iter/sec",
            "range": "stddev: 0.00050026",
            "group": "node",
            "extra": "mean: 5.1628 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 39.84844066392351,
            "unit": "iter/sec",
            "range": "stddev: 0.0040007",
            "group": "node",
            "extra": "mean: 25.095 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 40.45460645548725,
            "unit": "iter/sec",
            "range": "stddev: 0.0020732",
            "group": "node",
            "extra": "mean: 24.719 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.60",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "26f14ae0c352bfe7b7f3bd0282291831b71320ed",
          "message": "`Group`: add support for setting extras on groups (#4328)\n\nThe `DbGroup` database models get a new JSONB column `extras` which will\r\nfunction just like the extras of nodes. They will allow setting mutable\r\nextras as long as they are JSON-serializable.\r\n\r\nThe default is set to an empty dictionary that prevents the ORM from\r\nhaving to deal with null values. In addition, this keeps in line with\r\nthe current design of other database models. Since the default is one\r\ndefined on the ORM and not the database schema, we also explicitly mark\r\nthe column as non-nullable. Otherwise it would be possible to still\r\nstore rows in the database with null values.\r\n\r\nTo add the functionality of setting, getting and deleting the extras to\r\nthe backend end frontend `Group` ORM classes, the corresponding mixin\r\nclasses are added. The functionality for the `BackendGroup` was already\r\naccidentally added in a previous commit `65389f4958b9b111756450ea77e2`\r\nso only the frontend is touched here.",
          "timestamp": "2020-09-23T12:59:46+02:00",
          "url": "https://github.com/aiidateam/aiida-core/commit/26f14ae0c352bfe7b7f3bd0282291831b71320ed",
          "distinct": true,
          "tree_id": "85a2405b0ee69ac87acfed101a8ec0bb72a6d3b8"
        },
        "date": 1600859396143,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 3.4302356248300923,
            "unit": "iter/sec",
            "range": "stddev: 0.0074944",
            "group": "engine",
            "extra": "mean: 291.53 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 0.8126340660318903,
            "unit": "iter/sec",
            "range": "stddev: 0.050270",
            "group": "engine",
            "extra": "mean: 1.2306 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 0.9230971927007113,
            "unit": "iter/sec",
            "range": "stddev: 0.037813",
            "group": "engine",
            "extra": "mean: 1.0833 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-calcjob-loop]",
            "value": 0.17445626391222777,
            "unit": "iter/sec",
            "range": "stddev: 0.11566",
            "group": "engine",
            "extra": "mean: 5.7321 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.1993606040121676,
            "unit": "iter/sec",
            "range": "stddev: 0.099712",
            "group": "engine",
            "extra": "mean: 5.0160 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[basic-loop]",
            "value": 2.65641547293452,
            "unit": "iter/sec",
            "range": "stddev: 0.013526",
            "group": "engine",
            "extra": "mean: 376.45 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-wc-loop]",
            "value": 0.6370538281894426,
            "unit": "iter/sec",
            "range": "stddev: 0.050883",
            "group": "engine",
            "extra": "mean: 1.5697 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-wc-loop]",
            "value": 0.7097488931014659,
            "unit": "iter/sec",
            "range": "stddev: 0.077810",
            "group": "engine",
            "extra": "mean: 1.4089 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-calcjob-loop]",
            "value": 0.1539842450645789,
            "unit": "iter/sec",
            "range": "stddev: 0.13163",
            "group": "engine",
            "extra": "mean: 6.4942 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-calcjob-loop]",
            "value": 0.18303375403833308,
            "unit": "iter/sec",
            "range": "stddev: 0.12381",
            "group": "engine",
            "extra": "mean: 5.4635 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[no-objects]",
            "value": 2.6893293540883456,
            "unit": "iter/sec",
            "range": "stddev: 0.052074",
            "group": "import-export",
            "extra": "mean: 371.84 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[with-objects]",
            "value": 1.6775155171530458,
            "unit": "iter/sec",
            "range": "stddev: 0.050146",
            "group": "import-export",
            "extra": "mean: 596.12 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[no-objects]",
            "value": 1.431096357192478,
            "unit": "iter/sec",
            "range": "stddev: 0.078892",
            "group": "import-export",
            "extra": "mean: 698.76 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[with-objects]",
            "value": 1.409257767457854,
            "unit": "iter/sec",
            "range": "stddev: 0.044240",
            "group": "import-export",
            "extra": "mean: 709.59 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 957.5756900250685,
            "unit": "iter/sec",
            "range": "stddev: 0.00049994",
            "group": "node",
            "extra": "mean: 1.0443 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 211.24479736188977,
            "unit": "iter/sec",
            "range": "stddev: 0.0019472",
            "group": "node",
            "extra": "mean: 4.7338 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 204.3716865320632,
            "unit": "iter/sec",
            "range": "stddev: 0.00030712",
            "group": "node",
            "extra": "mean: 4.8930 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 212.0378775731471,
            "unit": "iter/sec",
            "range": "stddev: 0.00075805",
            "group": "node",
            "extra": "mean: 4.7161 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 39.4515760975371,
            "unit": "iter/sec",
            "range": "stddev: 0.016583",
            "group": "node",
            "extra": "mean: 25.348 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 40.167882193845465,
            "unit": "iter/sec",
            "range": "stddev: 0.0084700",
            "group": "node",
            "extra": "mean: 24.896 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.40",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "f2f6e2f89580eb824c4175703718a07a2d4b0bee",
          "message": "`SshTransport` : refactor interface to simplify subclassing (#4363)\n\nThe `SshTransport` transport plugin is refactored slightly to make it\r\neasier for sublcasses to adapt its behavior. Specifically:\r\n\r\n * Add simple wrappers around SFTP calls (stat, lstat and symlink) such\r\n   that they can be overriden in subclasses, for example if SFTP is not\r\n   available and pure SSH needs to be used.\r\n * New method to initialize file transport separately. Also adds error\r\n   checking for SFTP initialization, with an explicit message if it\r\n   fails to launch, and a possible solution.\r\n * Add `_MAX_EXEC_COMMAND_LOG_SIZE` class attribute that can be used to\r\n   limit the length of the debug message containing the command that is\r\n   executed in `_exec_command_internal`, which can grow very large.",
          "timestamp": "2020-09-23T13:30:27+02:00",
          "url": "https://github.com/aiidateam/aiida-core/commit/f2f6e2f89580eb824c4175703718a07a2d4b0bee",
          "distinct": true,
          "tree_id": "db0def820c8c26bed6a0d0758d5f32ae290709dd"
        },
        "date": 1600861204942,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 3.4872328112254065,
            "unit": "iter/sec",
            "range": "stddev: 0.0054087",
            "group": "engine",
            "extra": "mean: 286.76 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 0.8227769238410116,
            "unit": "iter/sec",
            "range": "stddev: 0.051610",
            "group": "engine",
            "extra": "mean: 1.2154 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 0.9362135514457747,
            "unit": "iter/sec",
            "range": "stddev: 0.043865",
            "group": "engine",
            "extra": "mean: 1.0681 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-calcjob-loop]",
            "value": 0.18191158975152025,
            "unit": "iter/sec",
            "range": "stddev: 0.078793",
            "group": "engine",
            "extra": "mean: 5.4972 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.20921866364499264,
            "unit": "iter/sec",
            "range": "stddev: 0.090692",
            "group": "engine",
            "extra": "mean: 4.7797 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[basic-loop]",
            "value": 2.6373847869895197,
            "unit": "iter/sec",
            "range": "stddev: 0.061960",
            "group": "engine",
            "extra": "mean: 379.16 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-wc-loop]",
            "value": 0.6580874415136518,
            "unit": "iter/sec",
            "range": "stddev: 0.055066",
            "group": "engine",
            "extra": "mean: 1.5196 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-wc-loop]",
            "value": 0.725290342608955,
            "unit": "iter/sec",
            "range": "stddev: 0.068233",
            "group": "engine",
            "extra": "mean: 1.3788 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-calcjob-loop]",
            "value": 0.16127534684847522,
            "unit": "iter/sec",
            "range": "stddev: 0.10272",
            "group": "engine",
            "extra": "mean: 6.2006 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-calcjob-loop]",
            "value": 0.18878305092412084,
            "unit": "iter/sec",
            "range": "stddev: 0.095174",
            "group": "engine",
            "extra": "mean: 5.2971 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[no-objects]",
            "value": 2.59009895731433,
            "unit": "iter/sec",
            "range": "stddev: 0.014467",
            "group": "import-export",
            "extra": "mean: 386.09 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[with-objects]",
            "value": 2.247592987770113,
            "unit": "iter/sec",
            "range": "stddev: 0.054102",
            "group": "import-export",
            "extra": "mean: 444.92 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[no-objects]",
            "value": 1.3706415969569177,
            "unit": "iter/sec",
            "range": "stddev: 0.060172",
            "group": "import-export",
            "extra": "mean: 729.59 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[with-objects]",
            "value": 1.2787441324977595,
            "unit": "iter/sec",
            "range": "stddev: 0.053294",
            "group": "import-export",
            "extra": "mean: 782.02 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 967.5848461275376,
            "unit": "iter/sec",
            "range": "stddev: 0.00014306",
            "group": "node",
            "extra": "mean: 1.0335 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 192.03040818484325,
            "unit": "iter/sec",
            "range": "stddev: 0.0028007",
            "group": "node",
            "extra": "mean: 5.2075 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 194.42336703016406,
            "unit": "iter/sec",
            "range": "stddev: 0.00046126",
            "group": "node",
            "extra": "mean: 5.1434 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 204.23494140345483,
            "unit": "iter/sec",
            "range": "stddev: 0.00053720",
            "group": "node",
            "extra": "mean: 4.8963 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 41.759398317365644,
            "unit": "iter/sec",
            "range": "stddev: 0.0031873",
            "group": "node",
            "extra": "mean: 23.947 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 38.98115193944446,
            "unit": "iter/sec",
            "range": "stddev: 0.016571",
            "group": "node",
            "extra": "mean: 25.653 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.60",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "0b155a518327b6e904e1424956bdb7d7103251fc",
          "message": "Remove duplicated migration for SqlAlchemy (#4390)\n\nThe `0edcdd5a30f0_add_extras_to_group.py` migration is a duplicate of\r\n`0edcdd5a30f0_dbgroup_extras.py` and was accidentally committed in\r\ncommit `26f14ae0c352bfe7b7f3bd0282291831b71320ed`. The migration is\r\nexactly the same, including the revision numbers, except the human\r\nreadable part was changed.",
          "timestamp": "2020-09-23T23:04:18+02:00",
          "url": "https://github.com/aiidateam/aiida-core/commit/0b155a518327b6e904e1424956bdb7d7103251fc",
          "distinct": true,
          "tree_id": "372544ccca48d0d4cd8b60579682bbf526cea04c"
        },
        "date": 1600895593277,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 3.965658631946454,
            "unit": "iter/sec",
            "range": "stddev: 0.0094131",
            "group": "engine",
            "extra": "mean: 252.16 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 0.9289019242789848,
            "unit": "iter/sec",
            "range": "stddev: 0.052339",
            "group": "engine",
            "extra": "mean: 1.0765 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 1.0268713452659728,
            "unit": "iter/sec",
            "range": "stddev: 0.062703",
            "group": "engine",
            "extra": "mean: 973.83 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-calcjob-loop]",
            "value": 0.19347979944031996,
            "unit": "iter/sec",
            "range": "stddev: 0.068984",
            "group": "engine",
            "extra": "mean: 5.1685 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.22366130297262857,
            "unit": "iter/sec",
            "range": "stddev: 0.084774",
            "group": "engine",
            "extra": "mean: 4.4710 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[basic-loop]",
            "value": 3.0379137213066425,
            "unit": "iter/sec",
            "range": "stddev: 0.0059169",
            "group": "engine",
            "extra": "mean: 329.17 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-wc-loop]",
            "value": 0.730076908821802,
            "unit": "iter/sec",
            "range": "stddev: 0.040879",
            "group": "engine",
            "extra": "mean: 1.3697 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-wc-loop]",
            "value": 0.8100441224609842,
            "unit": "iter/sec",
            "range": "stddev: 0.047923",
            "group": "engine",
            "extra": "mean: 1.2345 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-calcjob-loop]",
            "value": 0.17164555804352033,
            "unit": "iter/sec",
            "range": "stddev: 0.10961",
            "group": "engine",
            "extra": "mean: 5.8260 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-calcjob-loop]",
            "value": 0.2045254388139894,
            "unit": "iter/sec",
            "range": "stddev: 0.089551",
            "group": "engine",
            "extra": "mean: 4.8894 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[no-objects]",
            "value": 2.9980358458098855,
            "unit": "iter/sec",
            "range": "stddev: 0.048602",
            "group": "import-export",
            "extra": "mean: 333.55 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[with-objects]",
            "value": 2.6909017313419152,
            "unit": "iter/sec",
            "range": "stddev: 0.018972",
            "group": "import-export",
            "extra": "mean: 371.62 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[no-objects]",
            "value": 1.6525996366492535,
            "unit": "iter/sec",
            "range": "stddev: 0.056203",
            "group": "import-export",
            "extra": "mean: 605.11 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[with-objects]",
            "value": 1.5552085926369592,
            "unit": "iter/sec",
            "range": "stddev: 0.044867",
            "group": "import-export",
            "extra": "mean: 643.00 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 1073.3231126720789,
            "unit": "iter/sec",
            "range": "stddev: 0.00015188",
            "group": "node",
            "extra": "mean: 931.69 usec\nrounds: 210"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 237.70444273728404,
            "unit": "iter/sec",
            "range": "stddev: 0.00041168",
            "group": "node",
            "extra": "mean: 4.2069 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 213.12737543159813,
            "unit": "iter/sec",
            "range": "stddev: 0.00077463",
            "group": "node",
            "extra": "mean: 4.6920 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 237.6710744513611,
            "unit": "iter/sec",
            "range": "stddev: 0.0010273",
            "group": "node",
            "extra": "mean: 4.2075 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 49.49853648937095,
            "unit": "iter/sec",
            "range": "stddev: 0.0015236",
            "group": "node",
            "extra": "mean: 20.203 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 47.79136404746673,
            "unit": "iter/sec",
            "range": "stddev: 0.0017095",
            "group": "node",
            "extra": "mean: 20.924 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.40",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "59ebaf478511c13fc3e2de55569004fb88ab1dc7",
          "message": "Merge pull request #4385 from aiidateam/release/1.4.0\n\nRelease `v1.4.0`",
          "timestamp": "2020-09-24T11:08:58+02:00",
          "url": "https://github.com/aiidateam/aiida-core/commit/59ebaf478511c13fc3e2de55569004fb88ab1dc7",
          "distinct": false,
          "tree_id": "ca4353750bc03ffd3567c8273f8b3f0690c255c8"
        },
        "date": 1600944451125,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 3.9516141725862104,
            "unit": "iter/sec",
            "range": "stddev: 0.013294",
            "group": "engine",
            "extra": "mean: 253.06 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 0.9385662880603617,
            "unit": "iter/sec",
            "range": "stddev: 0.047312",
            "group": "engine",
            "extra": "mean: 1.0655 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 1.0838041426216145,
            "unit": "iter/sec",
            "range": "stddev: 0.041602",
            "group": "engine",
            "extra": "mean: 922.68 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-calcjob-loop]",
            "value": 0.20404479687895558,
            "unit": "iter/sec",
            "range": "stddev: 0.10597",
            "group": "engine",
            "extra": "mean: 4.9009 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.2348628931834495,
            "unit": "iter/sec",
            "range": "stddev: 0.094046",
            "group": "engine",
            "extra": "mean: 4.2578 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[basic-loop]",
            "value": 3.1256301065177006,
            "unit": "iter/sec",
            "range": "stddev: 0.018899",
            "group": "engine",
            "extra": "mean: 319.94 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-wc-loop]",
            "value": 0.7424044266613524,
            "unit": "iter/sec",
            "range": "stddev: 0.059148",
            "group": "engine",
            "extra": "mean: 1.3470 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-wc-loop]",
            "value": 0.8392139282799628,
            "unit": "iter/sec",
            "range": "stddev: 0.045431",
            "group": "engine",
            "extra": "mean: 1.1916 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-calcjob-loop]",
            "value": 0.18028360847057062,
            "unit": "iter/sec",
            "range": "stddev: 0.10216",
            "group": "engine",
            "extra": "mean: 5.5468 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-calcjob-loop]",
            "value": 0.2146763101481509,
            "unit": "iter/sec",
            "range": "stddev: 0.072429",
            "group": "engine",
            "extra": "mean: 4.6582 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[no-objects]",
            "value": 2.737864500816126,
            "unit": "iter/sec",
            "range": "stddev: 0.044253",
            "group": "import-export",
            "extra": "mean: 365.25 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[with-objects]",
            "value": 2.4050570186337987,
            "unit": "iter/sec",
            "range": "stddev: 0.040713",
            "group": "import-export",
            "extra": "mean: 415.79 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[no-objects]",
            "value": 1.521400112492957,
            "unit": "iter/sec",
            "range": "stddev: 0.045769",
            "group": "import-export",
            "extra": "mean: 657.29 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[with-objects]",
            "value": 1.4108645119137342,
            "unit": "iter/sec",
            "range": "stddev: 0.049555",
            "group": "import-export",
            "extra": "mean: 708.79 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 993.0907216387504,
            "unit": "iter/sec",
            "range": "stddev: 0.00087580",
            "group": "node",
            "extra": "mean: 1.0070 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 222.55021679851427,
            "unit": "iter/sec",
            "range": "stddev: 0.00092443",
            "group": "node",
            "extra": "mean: 4.4934 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 208.96714748387123,
            "unit": "iter/sec",
            "range": "stddev: 0.00040965",
            "group": "node",
            "extra": "mean: 4.7854 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 222.1033914787397,
            "unit": "iter/sec",
            "range": "stddev: 0.00056732",
            "group": "node",
            "extra": "mean: 4.5024 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 49.436483974974244,
            "unit": "iter/sec",
            "range": "stddev: 0.0010423",
            "group": "node",
            "extra": "mean: 20.228 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 48.36910806883929,
            "unit": "iter/sec",
            "range": "stddev: 0.0014076",
            "group": "node",
            "extra": "mean: 20.674 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.60",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "559abbaab690bc7f94c84ece63ad4810500592bf",
          "message": "Drop support for Python 3.5 (#4386)\n\nPython 3.5 is EOL as of September 13 2020. CI testing will now only be\r\ndone against Python 3.6 and 3.8.",
          "timestamp": "2020-09-24T14:51:59+02:00",
          "url": "https://github.com/aiidateam/aiida-core/commit/559abbaab690bc7f94c84ece63ad4810500592bf",
          "distinct": true,
          "tree_id": "4978f4074832a728936394b0c29d7852548fb639"
        },
        "date": 1600952465709,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 3.8681304328258252,
            "unit": "iter/sec",
            "range": "stddev: 0.0014731",
            "group": "engine",
            "extra": "mean: 258.52 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 0.9043850754464667,
            "unit": "iter/sec",
            "range": "stddev: 0.040908",
            "group": "engine",
            "extra": "mean: 1.1057 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 1.027099357984297,
            "unit": "iter/sec",
            "range": "stddev: 0.044097",
            "group": "engine",
            "extra": "mean: 973.62 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-calcjob-loop]",
            "value": 0.18863337340147926,
            "unit": "iter/sec",
            "range": "stddev: 0.066686",
            "group": "engine",
            "extra": "mean: 5.3013 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.21826287262824348,
            "unit": "iter/sec",
            "range": "stddev: 0.088448",
            "group": "engine",
            "extra": "mean: 4.5816 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[basic-loop]",
            "value": 2.908154626276631,
            "unit": "iter/sec",
            "range": "stddev: 0.048141",
            "group": "engine",
            "extra": "mean: 343.86 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-wc-loop]",
            "value": 0.706228755935879,
            "unit": "iter/sec",
            "range": "stddev: 0.041721",
            "group": "engine",
            "extra": "mean: 1.4160 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-wc-loop]",
            "value": 0.7892061667262048,
            "unit": "iter/sec",
            "range": "stddev: 0.070545",
            "group": "engine",
            "extra": "mean: 1.2671 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-calcjob-loop]",
            "value": 0.1671465367992935,
            "unit": "iter/sec",
            "range": "stddev: 0.12675",
            "group": "engine",
            "extra": "mean: 5.9828 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-calcjob-loop]",
            "value": 0.2002230963185479,
            "unit": "iter/sec",
            "range": "stddev: 0.083352",
            "group": "engine",
            "extra": "mean: 4.9944 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[no-objects]",
            "value": 2.866243775534499,
            "unit": "iter/sec",
            "range": "stddev: 0.042947",
            "group": "import-export",
            "extra": "mean: 348.89 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[with-objects]",
            "value": 2.623446278862129,
            "unit": "iter/sec",
            "range": "stddev: 0.0056094",
            "group": "import-export",
            "extra": "mean: 381.18 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[no-objects]",
            "value": 1.5712611204101221,
            "unit": "iter/sec",
            "range": "stddev: 0.049938",
            "group": "import-export",
            "extra": "mean: 636.43 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[with-objects]",
            "value": 1.4990370193682627,
            "unit": "iter/sec",
            "range": "stddev: 0.042624",
            "group": "import-export",
            "extra": "mean: 667.09 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 1052.2145430782216,
            "unit": "iter/sec",
            "range": "stddev: 0.000084884",
            "group": "node",
            "extra": "mean: 950.38 usec\nrounds: 208"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 231.53023304626313,
            "unit": "iter/sec",
            "range": "stddev: 0.00035847",
            "group": "node",
            "extra": "mean: 4.3191 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 212.32859589479642,
            "unit": "iter/sec",
            "range": "stddev: 0.00048500",
            "group": "node",
            "extra": "mean: 4.7097 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 237.80412225201053,
            "unit": "iter/sec",
            "range": "stddev: 0.00022202",
            "group": "node",
            "extra": "mean: 4.2051 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 47.32826799169289,
            "unit": "iter/sec",
            "range": "stddev: 0.0011849",
            "group": "node",
            "extra": "mean: 21.129 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 47.21004710777873,
            "unit": "iter/sec",
            "range": "stddev: 0.0012577",
            "group": "node",
            "extra": "mean: 21.182 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.30",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "01845181740c2768ce3c31165a3f80e18d241a9f",
          "message": "`LinkManager`: fix inaccuracy in exception message for non-existent link  (#4388)\n\nThe link manager was always referring to an 'input link' while it should\r\ninstead refer on an 'input link label' or 'output link label' depending\r\non the value of the link direction, determined by the `self._incoming`\r\nattribute.",
          "timestamp": "2020-09-24T15:12:32+02:00",
          "url": "https://github.com/aiidateam/aiida-core/commit/01845181740c2768ce3c31165a3f80e18d241a9f",
          "distinct": true,
          "tree_id": "c40d0d08cea7776aacbcd2ad9e998bd33e9532fc"
        },
        "date": 1600953784900,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 3.037073629162336,
            "unit": "iter/sec",
            "range": "stddev: 0.0081183",
            "group": "engine",
            "extra": "mean: 329.26 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 0.721144011777738,
            "unit": "iter/sec",
            "range": "stddev: 0.041535",
            "group": "engine",
            "extra": "mean: 1.3867 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 0.8051608776812673,
            "unit": "iter/sec",
            "range": "stddev: 0.050671",
            "group": "engine",
            "extra": "mean: 1.2420 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-calcjob-loop]",
            "value": 0.1606729893147609,
            "unit": "iter/sec",
            "range": "stddev: 0.083215",
            "group": "engine",
            "extra": "mean: 6.2238 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.1865277648867661,
            "unit": "iter/sec",
            "range": "stddev: 0.11048",
            "group": "engine",
            "extra": "mean: 5.3611 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[basic-loop]",
            "value": 2.521798580125874,
            "unit": "iter/sec",
            "range": "stddev: 0.014764",
            "group": "engine",
            "extra": "mean: 396.54 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-wc-loop]",
            "value": 0.5687201252551628,
            "unit": "iter/sec",
            "range": "stddev: 0.055734",
            "group": "engine",
            "extra": "mean: 1.7583 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-wc-loop]",
            "value": 0.6356642701370856,
            "unit": "iter/sec",
            "range": "stddev: 0.082456",
            "group": "engine",
            "extra": "mean: 1.5732 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-calcjob-loop]",
            "value": 0.14476408564768992,
            "unit": "iter/sec",
            "range": "stddev: 0.11032",
            "group": "engine",
            "extra": "mean: 6.9078 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-calcjob-loop]",
            "value": 0.17253939495577097,
            "unit": "iter/sec",
            "range": "stddev: 0.13045",
            "group": "engine",
            "extra": "mean: 5.7958 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[no-objects]",
            "value": 2.4727164240661157,
            "unit": "iter/sec",
            "range": "stddev: 0.054428",
            "group": "import-export",
            "extra": "mean: 404.41 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[with-objects]",
            "value": 2.198605661731646,
            "unit": "iter/sec",
            "range": "stddev: 0.058064",
            "group": "import-export",
            "extra": "mean: 454.83 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[no-objects]",
            "value": 1.240343633461937,
            "unit": "iter/sec",
            "range": "stddev: 0.086047",
            "group": "import-export",
            "extra": "mean: 806.23 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[with-objects]",
            "value": 1.207394798470984,
            "unit": "iter/sec",
            "range": "stddev: 0.050105",
            "group": "import-export",
            "extra": "mean: 828.23 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 898.1103629602962,
            "unit": "iter/sec",
            "range": "stddev: 0.00011277",
            "group": "node",
            "extra": "mean: 1.1134 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 191.68751922404604,
            "unit": "iter/sec",
            "range": "stddev: 0.00051227",
            "group": "node",
            "extra": "mean: 5.2168 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 173.50641039060153,
            "unit": "iter/sec",
            "range": "stddev: 0.00053406",
            "group": "node",
            "extra": "mean: 5.7635 msec\nrounds: 108"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 177.841471265698,
            "unit": "iter/sec",
            "range": "stddev: 0.0014515",
            "group": "node",
            "extra": "mean: 5.6230 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 35.327317345548984,
            "unit": "iter/sec",
            "range": "stddev: 0.017155",
            "group": "node",
            "extra": "mean: 28.307 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 39.79246190558662,
            "unit": "iter/sec",
            "range": "stddev: 0.0019673",
            "group": "node",
            "extra": "mean: 25.130 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.60",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "5e1c6fd965bc8cdeea8bc0c37ee19a71de5986f3",
          "message": "Implement `next` and `iter` for the `Node.open` deprecation wrapper (#4399)\n\nThe return value of `Node.open` was wrapped in `WarnWhenNotEntered` in\r\n`aiida-core==1.4.0` in order to warn users that use the method without a\r\ncontext manager, which will start to raise in v2.0. Unfortunately, the\r\nraising came a little early as the wrapper does not implement the\r\n`__iter__` and `__next__` methods, which can be called by clients.\r\n\r\nAn example is `numpy.getfromtxt` which will notice the return value of\r\n`Node.open` is filelike and so will wrap it in `iter`. Without the\r\ncurrent fix, this raises a `TypeError`. The proper fix would be to\r\nforward all magic methods to the wrapped filelike object, but it is not\r\nclear how to do this.",
          "timestamp": "2020-09-25T15:56:53+02:00",
          "url": "https://github.com/aiidateam/aiida-core/commit/5e1c6fd965bc8cdeea8bc0c37ee19a71de5986f3",
          "distinct": true,
          "tree_id": "0b57e939704231c31d3313b8a91d5065ed43c30f"
        },
        "date": 1601042771228,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 4.0243489077534775,
            "unit": "iter/sec",
            "range": "stddev: 0.0060400",
            "group": "engine",
            "extra": "mean: 248.49 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 0.8857906621182167,
            "unit": "iter/sec",
            "range": "stddev: 0.061550",
            "group": "engine",
            "extra": "mean: 1.1289 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 1.0262598767668643,
            "unit": "iter/sec",
            "range": "stddev: 0.041946",
            "group": "engine",
            "extra": "mean: 974.41 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-calcjob-loop]",
            "value": 0.18862336085051715,
            "unit": "iter/sec",
            "range": "stddev: 0.11492",
            "group": "engine",
            "extra": "mean: 5.3016 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.22212874665956672,
            "unit": "iter/sec",
            "range": "stddev: 0.093918",
            "group": "engine",
            "extra": "mean: 4.5019 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[basic-loop]",
            "value": 2.978710434189509,
            "unit": "iter/sec",
            "range": "stddev: 0.0039816",
            "group": "engine",
            "extra": "mean: 335.72 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-wc-loop]",
            "value": 0.6751731902549416,
            "unit": "iter/sec",
            "range": "stddev: 0.092206",
            "group": "engine",
            "extra": "mean: 1.4811 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-wc-loop]",
            "value": 0.76272278694613,
            "unit": "iter/sec",
            "range": "stddev: 0.072398",
            "group": "engine",
            "extra": "mean: 1.3111 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-calcjob-loop]",
            "value": 0.1626590659762098,
            "unit": "iter/sec",
            "range": "stddev: 0.21807",
            "group": "engine",
            "extra": "mean: 6.1478 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-calcjob-loop]",
            "value": 0.19699480108873185,
            "unit": "iter/sec",
            "range": "stddev: 0.087317",
            "group": "engine",
            "extra": "mean: 5.0763 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[no-objects]",
            "value": 2.847627880804877,
            "unit": "iter/sec",
            "range": "stddev: 0.047539",
            "group": "import-export",
            "extra": "mean: 351.17 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[with-objects]",
            "value": 2.521513689807495,
            "unit": "iter/sec",
            "range": "stddev: 0.050582",
            "group": "import-export",
            "extra": "mean: 396.59 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[no-objects]",
            "value": 1.5749717714166889,
            "unit": "iter/sec",
            "range": "stddev: 0.067028",
            "group": "import-export",
            "extra": "mean: 634.93 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[with-objects]",
            "value": 1.4667808625973713,
            "unit": "iter/sec",
            "range": "stddev: 0.054907",
            "group": "import-export",
            "extra": "mean: 681.77 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 799.5555558544725,
            "unit": "iter/sec",
            "range": "stddev: 0.00055682",
            "group": "node",
            "extra": "mean: 1.2507 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 204.01097521806844,
            "unit": "iter/sec",
            "range": "stddev: 0.0013623",
            "group": "node",
            "extra": "mean: 4.9017 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 209.96058141449026,
            "unit": "iter/sec",
            "range": "stddev: 0.00041905",
            "group": "node",
            "extra": "mean: 4.7628 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 234.24965849779701,
            "unit": "iter/sec",
            "range": "stddev: 0.00037981",
            "group": "node",
            "extra": "mean: 4.2689 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 45.37737466983685,
            "unit": "iter/sec",
            "range": "stddev: 0.0013616",
            "group": "node",
            "extra": "mean: 22.037 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 43.28335076589106,
            "unit": "iter/sec",
            "range": "stddev: 0.010774",
            "group": "node",
            "extra": "mean: 23.104 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.40",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "dac81560647b2ffaa170ee87f673bd9f89db2b41",
          "message": "Dependencies: increase minimum version requirement `plumpy~=0.15.1` (#4398)\n\nThe patch release of `plumpy` comes with a simple fix that will prevent\r\nthe printing of many warnings when running processes. So although not\r\ncritical, it does improve user experience.",
          "timestamp": "2020-09-25T16:20:33+02:00",
          "url": "https://github.com/aiidateam/aiida-core/commit/dac81560647b2ffaa170ee87f673bd9f89db2b41",
          "distinct": true,
          "tree_id": "f656192bf7be5c9d1c2e9f660333cbecf1ad8430"
        },
        "date": 1601044222671,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 3.669905829654885,
            "unit": "iter/sec",
            "range": "stddev: 0.0056207",
            "group": "engine",
            "extra": "mean: 272.49 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 0.8417478626861179,
            "unit": "iter/sec",
            "range": "stddev: 0.089953",
            "group": "engine",
            "extra": "mean: 1.1880 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 0.9807331042073577,
            "unit": "iter/sec",
            "range": "stddev: 0.036057",
            "group": "engine",
            "extra": "mean: 1.0196 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-calcjob-loop]",
            "value": 0.18704750621962976,
            "unit": "iter/sec",
            "range": "stddev: 0.088809",
            "group": "engine",
            "extra": "mean: 5.3462 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.21036057521658738,
            "unit": "iter/sec",
            "range": "stddev: 0.13603",
            "group": "engine",
            "extra": "mean: 4.7537 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[basic-loop]",
            "value": 2.824128220509228,
            "unit": "iter/sec",
            "range": "stddev: 0.016226",
            "group": "engine",
            "extra": "mean: 354.09 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-wc-loop]",
            "value": 0.6853108626018104,
            "unit": "iter/sec",
            "range": "stddev: 0.049738",
            "group": "engine",
            "extra": "mean: 1.4592 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-wc-loop]",
            "value": 0.7456851553555938,
            "unit": "iter/sec",
            "range": "stddev: 0.063956",
            "group": "engine",
            "extra": "mean: 1.3410 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-calcjob-loop]",
            "value": 0.16416547114191093,
            "unit": "iter/sec",
            "range": "stddev: 0.083491",
            "group": "engine",
            "extra": "mean: 6.0914 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-calcjob-loop]",
            "value": 0.19593079376218764,
            "unit": "iter/sec",
            "range": "stddev: 0.12428",
            "group": "engine",
            "extra": "mean: 5.1038 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[no-objects]",
            "value": 2.499458306981134,
            "unit": "iter/sec",
            "range": "stddev: 0.044125",
            "group": "import-export",
            "extra": "mean: 400.09 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[with-objects]",
            "value": 2.275993574383098,
            "unit": "iter/sec",
            "range": "stddev: 0.045165",
            "group": "import-export",
            "extra": "mean: 439.37 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[no-objects]",
            "value": 1.4483398561663727,
            "unit": "iter/sec",
            "range": "stddev: 0.063412",
            "group": "import-export",
            "extra": "mean: 690.45 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[with-objects]",
            "value": 1.3158064190201906,
            "unit": "iter/sec",
            "range": "stddev: 0.067660",
            "group": "import-export",
            "extra": "mean: 759.99 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 972.0163346964948,
            "unit": "iter/sec",
            "range": "stddev: 0.00027615",
            "group": "node",
            "extra": "mean: 1.0288 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 210.8694352641828,
            "unit": "iter/sec",
            "range": "stddev: 0.00073664",
            "group": "node",
            "extra": "mean: 4.7423 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 197.9439340323539,
            "unit": "iter/sec",
            "range": "stddev: 0.00080545",
            "group": "node",
            "extra": "mean: 5.0519 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 216.44201133013462,
            "unit": "iter/sec",
            "range": "stddev: 0.00045787",
            "group": "node",
            "extra": "mean: 4.6202 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 43.30620779141131,
            "unit": "iter/sec",
            "range": "stddev: 0.0026809",
            "group": "node",
            "extra": "mean: 23.091 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 38.38871422905097,
            "unit": "iter/sec",
            "range": "stddev: 0.017859",
            "group": "node",
            "extra": "mean: 26.049 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.60",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "ff30ebdb8860dc69bcbfec5e7a19e8b6e15a4f42",
          "message": "`verdi setup`: forward broker defaults to interactive mode (#4405)\n\nThe options for the message broker configuration do define defaults,\r\nhowever, the interactive clones for `verdi setup`, which are defined in\r\n`aiida.cmdline.params.options.commands.setup` override the default with\r\nthe `contextual_default` which sets an empty default, unless it is taken\r\nfrom an existing profile. The result is that for new profiles, the\r\nbroker options do not specify a default, even though for most usecases\r\nthe defaults will be required. After the changes of this commit, the\r\nprompt of `verdi setup` will provide a default for all broker parameters\r\nso most users will simply have to press enter each time.",
          "timestamp": "2020-09-26T20:24:20+02:00",
          "url": "https://github.com/aiidateam/aiida-core/commit/ff30ebdb8860dc69bcbfec5e7a19e8b6e15a4f42",
          "distinct": true,
          "tree_id": "7bb1be28e3269247b969133b649361fe0a808875"
        },
        "date": 1601145217578,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 3.658629669381976,
            "unit": "iter/sec",
            "range": "stddev: 0.0083069",
            "group": "engine",
            "extra": "mean: 273.33 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 0.8719311995927755,
            "unit": "iter/sec",
            "range": "stddev: 0.038544",
            "group": "engine",
            "extra": "mean: 1.1469 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 0.9895277734464488,
            "unit": "iter/sec",
            "range": "stddev: 0.034678",
            "group": "engine",
            "extra": "mean: 1.0106 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-calcjob-loop]",
            "value": 0.18429473344770958,
            "unit": "iter/sec",
            "range": "stddev: 0.094902",
            "group": "engine",
            "extra": "mean: 5.4261 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.2128084300883462,
            "unit": "iter/sec",
            "range": "stddev: 0.087895",
            "group": "engine",
            "extra": "mean: 4.6991 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[basic-loop]",
            "value": 2.9090599203035934,
            "unit": "iter/sec",
            "range": "stddev: 0.0083076",
            "group": "engine",
            "extra": "mean: 343.75 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-wc-loop]",
            "value": 0.6809036788274678,
            "unit": "iter/sec",
            "range": "stddev: 0.061067",
            "group": "engine",
            "extra": "mean: 1.4686 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-wc-loop]",
            "value": 0.7700768138260954,
            "unit": "iter/sec",
            "range": "stddev: 0.055037",
            "group": "engine",
            "extra": "mean: 1.2986 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-calcjob-loop]",
            "value": 0.16384459664590859,
            "unit": "iter/sec",
            "range": "stddev: 0.11983",
            "group": "engine",
            "extra": "mean: 6.1033 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-calcjob-loop]",
            "value": 0.193006433938456,
            "unit": "iter/sec",
            "range": "stddev: 0.11748",
            "group": "engine",
            "extra": "mean: 5.1812 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[no-objects]",
            "value": 2.852608965958365,
            "unit": "iter/sec",
            "range": "stddev: 0.055974",
            "group": "import-export",
            "extra": "mean: 350.56 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[with-objects]",
            "value": 2.609905259290595,
            "unit": "iter/sec",
            "range": "stddev: 0.0083688",
            "group": "import-export",
            "extra": "mean: 383.16 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[no-objects]",
            "value": 1.5506407880914364,
            "unit": "iter/sec",
            "range": "stddev: 0.058830",
            "group": "import-export",
            "extra": "mean: 644.89 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[with-objects]",
            "value": 1.469185452163126,
            "unit": "iter/sec",
            "range": "stddev: 0.052262",
            "group": "import-export",
            "extra": "mean: 680.65 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 1045.8837803516979,
            "unit": "iter/sec",
            "range": "stddev: 0.00039044",
            "group": "node",
            "extra": "mean: 956.13 usec\nrounds: 179"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 232.0200487212111,
            "unit": "iter/sec",
            "range": "stddev: 0.00039611",
            "group": "node",
            "extra": "mean: 4.3100 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 209.25843687145277,
            "unit": "iter/sec",
            "range": "stddev: 0.00038371",
            "group": "node",
            "extra": "mean: 4.7788 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 241.57050415305682,
            "unit": "iter/sec",
            "range": "stddev: 0.00022914",
            "group": "node",
            "extra": "mean: 4.1396 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 43.82075871838796,
            "unit": "iter/sec",
            "range": "stddev: 0.0077696",
            "group": "node",
            "extra": "mean: 22.820 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 46.613686644300564,
            "unit": "iter/sec",
            "range": "stddev: 0.0016732",
            "group": "node",
            "extra": "mean: 21.453 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.60",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "1310abaa7f765866f636c9af2d3332e3eaf74ced",
          "message": "`verdi setup`: improve validation and help string of broker virtual host (#4408)\n\nThe help string of the `--broker-virtual-host` option of `verdi setup`\r\nincorrectly said that forward slashes have to be escaped but this is not\r\ntrue. The code will escape any characters necessary when constructing\r\nthe URL to connect to RabbitMQ. On top of that, slashes would fail the\r\nvalidation outright, even though these are common in virtual hosts. For\r\nexample the virtual host always starts with a leading forward slash, but\r\nour validation would reject it. Also the leading slash will be added by\r\nthe code and so does not have to be used in the setup phase. The help\r\nstring and the documentation now reflect this.\r\n\r\nThe exacti naming rules for virtual hosts, imposed by RabbitMQ or other\r\nimplemenatations of the AMQP protocol, are not fully clear. But instead\r\nof putting an explicit validation on AiiDA's side and running the risk\r\nthat we incorrectly reject valid virtual host names, we simply accept\r\nall strings. In any case, any non-default virtual host will have to be\r\ncreated through RabbitMQ's control interface, which will perform the\r\nvalidation itself.",
          "timestamp": "2020-09-28T08:30:05+02:00",
          "url": "https://github.com/aiidateam/aiida-core/commit/1310abaa7f765866f636c9af2d3332e3eaf74ced",
          "distinct": true,
          "tree_id": "0950b812971ab426a8f4bb6ebd2ca7c471670dc4"
        },
        "date": 1601275187303,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 3.5754218477198707,
            "unit": "iter/sec",
            "range": "stddev: 0.012532",
            "group": "engine",
            "extra": "mean: 279.69 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 0.8190664001247299,
            "unit": "iter/sec",
            "range": "stddev: 0.041156",
            "group": "engine",
            "extra": "mean: 1.2209 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 0.943986451182987,
            "unit": "iter/sec",
            "range": "stddev: 0.037817",
            "group": "engine",
            "extra": "mean: 1.0593 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-calcjob-loop]",
            "value": 0.1788318790646238,
            "unit": "iter/sec",
            "range": "stddev: 0.079741",
            "group": "engine",
            "extra": "mean: 5.5918 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.20691641738407834,
            "unit": "iter/sec",
            "range": "stddev: 0.088286",
            "group": "engine",
            "extra": "mean: 4.8329 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[basic-loop]",
            "value": 2.8295941492144823,
            "unit": "iter/sec",
            "range": "stddev: 0.012809",
            "group": "engine",
            "extra": "mean: 353.41 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-wc-loop]",
            "value": 0.6535139364799202,
            "unit": "iter/sec",
            "range": "stddev: 0.065560",
            "group": "engine",
            "extra": "mean: 1.5302 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-wc-loop]",
            "value": 0.7456387820278485,
            "unit": "iter/sec",
            "range": "stddev: 0.056247",
            "group": "engine",
            "extra": "mean: 1.3411 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-calcjob-loop]",
            "value": 0.16040717494476878,
            "unit": "iter/sec",
            "range": "stddev: 0.14452",
            "group": "engine",
            "extra": "mean: 6.2341 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-calcjob-loop]",
            "value": 0.18868534480023666,
            "unit": "iter/sec",
            "range": "stddev: 0.096107",
            "group": "engine",
            "extra": "mean: 5.2998 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[no-objects]",
            "value": 2.783958378040638,
            "unit": "iter/sec",
            "range": "stddev: 0.051336",
            "group": "import-export",
            "extra": "mean: 359.20 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[with-objects]",
            "value": 2.456554501975293,
            "unit": "iter/sec",
            "range": "stddev: 0.050164",
            "group": "import-export",
            "extra": "mean: 407.07 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[no-objects]",
            "value": 1.5240525199044954,
            "unit": "iter/sec",
            "range": "stddev: 0.061673",
            "group": "import-export",
            "extra": "mean: 656.15 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[with-objects]",
            "value": 1.4490944691260963,
            "unit": "iter/sec",
            "range": "stddev: 0.052097",
            "group": "import-export",
            "extra": "mean: 690.09 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 1105.5533292425353,
            "unit": "iter/sec",
            "range": "stddev: 0.00014093",
            "group": "node",
            "extra": "mean: 904.52 usec\nrounds: 191"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 225.14169160496635,
            "unit": "iter/sec",
            "range": "stddev: 0.00047598",
            "group": "node",
            "extra": "mean: 4.4416 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 213.44648556191558,
            "unit": "iter/sec",
            "range": "stddev: 0.00029872",
            "group": "node",
            "extra": "mean: 4.6850 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 225.15807233775556,
            "unit": "iter/sec",
            "range": "stddev: 0.00035532",
            "group": "node",
            "extra": "mean: 4.4413 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 41.48466345717491,
            "unit": "iter/sec",
            "range": "stddev: 0.0070692",
            "group": "node",
            "extra": "mean: 24.105 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 44.784583976784376,
            "unit": "iter/sec",
            "range": "stddev: 0.0014757",
            "group": "node",
            "extra": "mean: 22.329 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.30",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "e2b5385044076f135e5b769aa8fd24f7950738f5",
          "message": "Merge branch 'master' of github.com:aiidateam/aiida-core into develop\n\nMerge after release of `v1.4.0`.",
          "timestamp": "2020-09-28T11:12:09+02:00",
          "url": "https://github.com/aiidateam/aiida-core/commit/e2b5385044076f135e5b769aa8fd24f7950738f5",
          "distinct": true,
          "tree_id": "036461f0e803060dbed684406dab0a1cb6834a0a"
        },
        "date": 1601288139267,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 3.07950049850299,
            "unit": "iter/sec",
            "range": "stddev: 0.025381",
            "group": "engine",
            "extra": "mean: 324.73 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 0.7235582769742596,
            "unit": "iter/sec",
            "range": "stddev: 0.082410",
            "group": "engine",
            "extra": "mean: 1.3821 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 0.7848468943921648,
            "unit": "iter/sec",
            "range": "stddev: 0.12465",
            "group": "engine",
            "extra": "mean: 1.2741 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-calcjob-loop]",
            "value": 0.15756342407146498,
            "unit": "iter/sec",
            "range": "stddev: 0.16948",
            "group": "engine",
            "extra": "mean: 6.3467 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.17920123029047752,
            "unit": "iter/sec",
            "range": "stddev: 0.21127",
            "group": "engine",
            "extra": "mean: 5.5803 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[basic-loop]",
            "value": 2.4727636190074915,
            "unit": "iter/sec",
            "range": "stddev: 0.034722",
            "group": "engine",
            "extra": "mean: 404.41 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-wc-loop]",
            "value": 0.5733611721480836,
            "unit": "iter/sec",
            "range": "stddev: 0.084771",
            "group": "engine",
            "extra": "mean: 1.7441 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-wc-loop]",
            "value": 0.6260014749686602,
            "unit": "iter/sec",
            "range": "stddev: 0.10412",
            "group": "engine",
            "extra": "mean: 1.5974 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-calcjob-loop]",
            "value": 0.141429565469121,
            "unit": "iter/sec",
            "range": "stddev: 0.15162",
            "group": "engine",
            "extra": "mean: 7.0707 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-calcjob-loop]",
            "value": 0.1648281874886317,
            "unit": "iter/sec",
            "range": "stddev: 0.11046",
            "group": "engine",
            "extra": "mean: 6.0669 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[no-objects]",
            "value": 2.267539730182589,
            "unit": "iter/sec",
            "range": "stddev: 0.049290",
            "group": "import-export",
            "extra": "mean: 441.01 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[with-objects]",
            "value": 2.164520054588404,
            "unit": "iter/sec",
            "range": "stddev: 0.030784",
            "group": "import-export",
            "extra": "mean: 462.00 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[no-objects]",
            "value": 1.1803632815698015,
            "unit": "iter/sec",
            "range": "stddev: 0.093048",
            "group": "import-export",
            "extra": "mean: 847.20 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[with-objects]",
            "value": 1.157403252901267,
            "unit": "iter/sec",
            "range": "stddev: 0.050210",
            "group": "import-export",
            "extra": "mean: 864.00 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 787.9343921706115,
            "unit": "iter/sec",
            "range": "stddev: 0.0010500",
            "group": "node",
            "extra": "mean: 1.2691 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 157.2119312666463,
            "unit": "iter/sec",
            "range": "stddev: 0.0036759",
            "group": "node",
            "extra": "mean: 6.3608 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 156.01157812831624,
            "unit": "iter/sec",
            "range": "stddev: 0.0033345",
            "group": "node",
            "extra": "mean: 6.4098 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 188.6787048787464,
            "unit": "iter/sec",
            "range": "stddev: 0.0014366",
            "group": "node",
            "extra": "mean: 5.3000 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 36.047716860253374,
            "unit": "iter/sec",
            "range": "stddev: 0.0069493",
            "group": "node",
            "extra": "mean: 27.741 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 38.12050220029947,
            "unit": "iter/sec",
            "range": "stddev: 0.0059683",
            "group": "node",
            "extra": "mean: 26.233 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.40",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "65ad067b18cffeb639994efe9a372ec1475e1615",
          "message": "CI: move `pylint` configuration to `pyproject.toml` (#4411)\n\nThis is supported by `pylint` as of v2.5.",
          "timestamp": "2020-09-28T23:17:27+02:00",
          "url": "https://github.com/aiidateam/aiida-core/commit/65ad067b18cffeb639994efe9a372ec1475e1615",
          "distinct": true,
          "tree_id": "636ba633d0ab1b287b1e6483de770bc7d9c6522f"
        },
        "date": 1601328433626,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 3.39484866098712,
            "unit": "iter/sec",
            "range": "stddev: 0.012971",
            "group": "engine",
            "extra": "mean: 294.56 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 0.8239874467463725,
            "unit": "iter/sec",
            "range": "stddev: 0.046972",
            "group": "engine",
            "extra": "mean: 1.2136 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 0.9313009780692192,
            "unit": "iter/sec",
            "range": "stddev: 0.045025",
            "group": "engine",
            "extra": "mean: 1.0738 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-calcjob-loop]",
            "value": 0.18056844096991156,
            "unit": "iter/sec",
            "range": "stddev: 0.094625",
            "group": "engine",
            "extra": "mean: 5.5381 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.20522307779955998,
            "unit": "iter/sec",
            "range": "stddev: 0.11800",
            "group": "engine",
            "extra": "mean: 4.8727 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[basic-loop]",
            "value": 2.827059766040088,
            "unit": "iter/sec",
            "range": "stddev: 0.0044021",
            "group": "engine",
            "extra": "mean: 353.72 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-wc-loop]",
            "value": 0.6423571023154523,
            "unit": "iter/sec",
            "range": "stddev: 0.066519",
            "group": "engine",
            "extra": "mean: 1.5568 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-wc-loop]",
            "value": 0.7358840843585123,
            "unit": "iter/sec",
            "range": "stddev: 0.084641",
            "group": "engine",
            "extra": "mean: 1.3589 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-calcjob-loop]",
            "value": 0.15977598434278975,
            "unit": "iter/sec",
            "range": "stddev: 0.11115",
            "group": "engine",
            "extra": "mean: 6.2588 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-calcjob-loop]",
            "value": 0.18897377480954605,
            "unit": "iter/sec",
            "range": "stddev: 0.14604",
            "group": "engine",
            "extra": "mean: 5.2917 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[no-objects]",
            "value": 2.5884442529287757,
            "unit": "iter/sec",
            "range": "stddev: 0.047257",
            "group": "import-export",
            "extra": "mean: 386.33 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[with-objects]",
            "value": 2.3149415533994278,
            "unit": "iter/sec",
            "range": "stddev: 0.051589",
            "group": "import-export",
            "extra": "mean: 431.98 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[no-objects]",
            "value": 1.3494422176403695,
            "unit": "iter/sec",
            "range": "stddev: 0.055606",
            "group": "import-export",
            "extra": "mean: 741.05 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[with-objects]",
            "value": 1.2520741018333854,
            "unit": "iter/sec",
            "range": "stddev: 0.067223",
            "group": "import-export",
            "extra": "mean: 798.67 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 860.2547448945278,
            "unit": "iter/sec",
            "range": "stddev: 0.00039338",
            "group": "node",
            "extra": "mean: 1.1624 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 199.68552622475664,
            "unit": "iter/sec",
            "range": "stddev: 0.00026170",
            "group": "node",
            "extra": "mean: 5.0079 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 186.98259686864716,
            "unit": "iter/sec",
            "range": "stddev: 0.00077714",
            "group": "node",
            "extra": "mean: 5.3481 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 193.95352372403,
            "unit": "iter/sec",
            "range": "stddev: 0.00027119",
            "group": "node",
            "extra": "mean: 5.1559 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 38.930923242591376,
            "unit": "iter/sec",
            "range": "stddev: 0.0086760",
            "group": "node",
            "extra": "mean: 25.687 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 40.210600009796345,
            "unit": "iter/sec",
            "range": "stddev: 0.0020491",
            "group": "node",
            "extra": "mean: 24.869 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.30",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "91449241ff2e12dd836b29882e32201cc7841716",
          "message": "`verdi process show`: order called by ctime and use process label (#4407)\n\nThe command was showing the called subprocesses in a random order and\r\nused the node type, which is often uninformative. For example, all\r\nworkchains are always shown as `WorkChainNode`. By using the process\r\nlabel instead, which is more specific, and ordering the called nodes by\r\ncreation time, the list gives a more natural overview of the order in\r\nwhich the subprocesses were called.",
          "timestamp": "2020-09-29T14:29:57+02:00",
          "url": "https://github.com/aiidateam/aiida-core/commit/91449241ff2e12dd836b29882e32201cc7841716",
          "distinct": true,
          "tree_id": "a9721615e95c90093d05e5801d20086ee303d99b"
        },
        "date": 1601383185246,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 3.4477202048922604,
            "unit": "iter/sec",
            "range": "stddev: 0.0082148",
            "group": "engine",
            "extra": "mean: 290.05 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 0.7997143879562119,
            "unit": "iter/sec",
            "range": "stddev: 0.032961",
            "group": "engine",
            "extra": "mean: 1.2504 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 0.9180724246411056,
            "unit": "iter/sec",
            "range": "stddev: 0.035054",
            "group": "engine",
            "extra": "mean: 1.0892 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-calcjob-loop]",
            "value": 0.17873072613550792,
            "unit": "iter/sec",
            "range": "stddev: 0.067847",
            "group": "engine",
            "extra": "mean: 5.5950 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.20559959979972106,
            "unit": "iter/sec",
            "range": "stddev: 0.086505",
            "group": "engine",
            "extra": "mean: 4.8638 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[basic-loop]",
            "value": 2.755652687511781,
            "unit": "iter/sec",
            "range": "stddev: 0.0093504",
            "group": "engine",
            "extra": "mean: 362.89 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-wc-loop]",
            "value": 0.6498637988545973,
            "unit": "iter/sec",
            "range": "stddev: 0.071184",
            "group": "engine",
            "extra": "mean: 1.5388 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-wc-loop]",
            "value": 0.7394208674268108,
            "unit": "iter/sec",
            "range": "stddev: 0.039575",
            "group": "engine",
            "extra": "mean: 1.3524 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-calcjob-loop]",
            "value": 0.15781056772280241,
            "unit": "iter/sec",
            "range": "stddev: 0.13543",
            "group": "engine",
            "extra": "mean: 6.3367 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-calcjob-loop]",
            "value": 0.1883420297173608,
            "unit": "iter/sec",
            "range": "stddev: 0.10319",
            "group": "engine",
            "extra": "mean: 5.3095 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[no-objects]",
            "value": 2.6320809186778167,
            "unit": "iter/sec",
            "range": "stddev: 0.044395",
            "group": "import-export",
            "extra": "mean: 379.93 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[with-objects]",
            "value": 2.283070890573823,
            "unit": "iter/sec",
            "range": "stddev: 0.051785",
            "group": "import-export",
            "extra": "mean: 438.01 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[no-objects]",
            "value": 1.3261529905417098,
            "unit": "iter/sec",
            "range": "stddev: 0.055170",
            "group": "import-export",
            "extra": "mean: 754.06 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[with-objects]",
            "value": 1.2257071487472362,
            "unit": "iter/sec",
            "range": "stddev: 0.045707",
            "group": "import-export",
            "extra": "mean: 815.86 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 878.0724777915393,
            "unit": "iter/sec",
            "range": "stddev: 0.00037579",
            "group": "node",
            "extra": "mean: 1.1389 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 194.64721535319163,
            "unit": "iter/sec",
            "range": "stddev: 0.00085278",
            "group": "node",
            "extra": "mean: 5.1375 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 184.70378490249234,
            "unit": "iter/sec",
            "range": "stddev: 0.00060381",
            "group": "node",
            "extra": "mean: 5.4141 msec\nrounds: 105"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 188.8994439391033,
            "unit": "iter/sec",
            "range": "stddev: 0.0011399",
            "group": "node",
            "extra": "mean: 5.2938 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 42.9417778315351,
            "unit": "iter/sec",
            "range": "stddev: 0.0015273",
            "group": "node",
            "extra": "mean: 23.287 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 41.86138188443538,
            "unit": "iter/sec",
            "range": "stddev: 0.0022244",
            "group": "node",
            "extra": "mean: 23.888 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.60",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "af91a8b10f2fe68360483a951d5c578863d38b76",
          "message": "Dependencies: update requirement `pytest~=6.0` and use `pyproject.toml` (#4410)\n\nStarting from v6.0, `pytest` supports using the `pyproject.toml` instead\r\nof a `pytest.ini` to define its configuration. Given that this is\r\nquickly becoming the Python packaging standard and allows us to reduce\r\nthe number of configuration files in the top level of the repository, we\r\nincrease the version requirement of `pytest`.\r\n\r\nNote that we also require `pytest-rerunfailures>=9.1.1` because lower\r\nversions are broken in combination with `pytest==6.1`. See the following:\r\n\r\n   https://github.com/pytest-dev/pytest-rerunfailures/issues/128\r\n\r\nfor details.",
          "timestamp": "2020-09-29T17:34:16+02:00",
          "url": "https://github.com/aiidateam/aiida-core/commit/af91a8b10f2fe68360483a951d5c578863d38b76",
          "distinct": true,
          "tree_id": "3fc1f773a856d3b5ae5c8ecf03213deb0833cb71"
        },
        "date": 1601394178103,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 3.6896585987198365,
            "unit": "iter/sec",
            "range": "stddev: 0.055407",
            "group": "engine",
            "extra": "mean: 271.03 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 0.9359720067455561,
            "unit": "iter/sec",
            "range": "stddev: 0.056063",
            "group": "engine",
            "extra": "mean: 1.0684 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 1.0629932099945947,
            "unit": "iter/sec",
            "range": "stddev: 0.055067",
            "group": "engine",
            "extra": "mean: 940.74 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-calcjob-loop]",
            "value": 0.20357134450584208,
            "unit": "iter/sec",
            "range": "stddev: 0.096772",
            "group": "engine",
            "extra": "mean: 4.9123 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.23373155441266014,
            "unit": "iter/sec",
            "range": "stddev: 0.11126",
            "group": "engine",
            "extra": "mean: 4.2784 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[basic-loop]",
            "value": 3.0975241976019103,
            "unit": "iter/sec",
            "range": "stddev: 0.013459",
            "group": "engine",
            "extra": "mean: 322.84 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-wc-loop]",
            "value": 0.7356127905709452,
            "unit": "iter/sec",
            "range": "stddev: 0.059240",
            "group": "engine",
            "extra": "mean: 1.3594 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-wc-loop]",
            "value": 0.7833731379038117,
            "unit": "iter/sec",
            "range": "stddev: 0.064819",
            "group": "engine",
            "extra": "mean: 1.2765 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-calcjob-loop]",
            "value": 0.17767403382098784,
            "unit": "iter/sec",
            "range": "stddev: 0.10190",
            "group": "engine",
            "extra": "mean: 5.6283 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-calcjob-loop]",
            "value": 0.21314368699289526,
            "unit": "iter/sec",
            "range": "stddev: 0.092814",
            "group": "engine",
            "extra": "mean: 4.6917 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[no-objects]",
            "value": 3.1114214464756724,
            "unit": "iter/sec",
            "range": "stddev: 0.050856",
            "group": "import-export",
            "extra": "mean: 321.40 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[with-objects]",
            "value": 2.7686206712941854,
            "unit": "iter/sec",
            "range": "stddev: 0.049577",
            "group": "import-export",
            "extra": "mean: 361.19 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[no-objects]",
            "value": 1.742833842276622,
            "unit": "iter/sec",
            "range": "stddev: 0.066237",
            "group": "import-export",
            "extra": "mean: 573.78 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[with-objects]",
            "value": 1.663170184680389,
            "unit": "iter/sec",
            "range": "stddev: 0.043891",
            "group": "import-export",
            "extra": "mean: 601.26 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 1251.300131352632,
            "unit": "iter/sec",
            "range": "stddev: 0.000034214",
            "group": "node",
            "extra": "mean: 799.17 usec\nrounds: 205"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 251.4724743334726,
            "unit": "iter/sec",
            "range": "stddev: 0.0010425",
            "group": "node",
            "extra": "mean: 3.9766 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 242.1330661976241,
            "unit": "iter/sec",
            "range": "stddev: 0.000075402",
            "group": "node",
            "extra": "mean: 4.1300 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 273.5496612381178,
            "unit": "iter/sec",
            "range": "stddev: 0.00010492",
            "group": "node",
            "extra": "mean: 3.6556 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 47.56497579985233,
            "unit": "iter/sec",
            "range": "stddev: 0.015472",
            "group": "node",
            "extra": "mean: 21.024 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 46.20762713287542,
            "unit": "iter/sec",
            "range": "stddev: 0.012484",
            "group": "node",
            "extra": "mean: 21.641 msec\nrounds: 100"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.60",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5",
          "metadata": "postgres:12.3, rabbitmq:3.8.3"
        },
        "commit": {
          "id": "4544bc49a50c9aa3abebd2837efb5626958ee2b4",
          "message": "CI: add coverage patch threshold to prevent false positives (#4413)\n\nThe project diff percentage is the change in coverage w.r.t. all lines\r\nin the project, whereas the patch diff percentage is the change in\r\ncoverage w.r.t. only lines touched by the PR. The patch threshold is\r\ncurrently defaulting to 0%, hence it is very easy to fail. By raising it\r\nto 0.1% it should now only fail when there is a significant reduction\r\nin coverage. Number may need to be further tweaked.",
          "timestamp": "2020-09-30T10:24:15+02:00",
          "url": "https://github.com/aiidateam/aiida-core/commit/4544bc49a50c9aa3abebd2837efb5626958ee2b4",
          "distinct": true,
          "tree_id": "e8cc6385b285fc53da873eb1a8b3b569fbfc567d"
        },
        "date": 1601454822743,
        "benches": [
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[basic-loop]",
            "value": 3.4325211286393724,
            "unit": "iter/sec",
            "range": "stddev: 0.058586",
            "group": "engine",
            "extra": "mean: 291.33 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-wc-loop]",
            "value": 0.8749542577960603,
            "unit": "iter/sec",
            "range": "stddev: 0.042648",
            "group": "engine",
            "extra": "mean: 1.1429 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-wc-loop]",
            "value": 0.9774846086737325,
            "unit": "iter/sec",
            "range": "stddev: 0.059268",
            "group": "engine",
            "extra": "mean: 1.0230 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[serial-calcjob-loop]",
            "value": 0.1830068346474011,
            "unit": "iter/sec",
            "range": "stddev: 0.10260",
            "group": "engine",
            "extra": "mean: 5.4643 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_local[threaded-calcjob-loop]",
            "value": 0.21286543035463648,
            "unit": "iter/sec",
            "range": "stddev: 0.098291",
            "group": "engine",
            "extra": "mean: 4.6978 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[basic-loop]",
            "value": 2.8673932752481335,
            "unit": "iter/sec",
            "range": "stddev: 0.0094069",
            "group": "engine",
            "extra": "mean: 348.75 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-wc-loop]",
            "value": 0.6962799893085728,
            "unit": "iter/sec",
            "range": "stddev: 0.049088",
            "group": "engine",
            "extra": "mean: 1.4362 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-wc-loop]",
            "value": 0.767289874022034,
            "unit": "iter/sec",
            "range": "stddev: 0.056031",
            "group": "engine",
            "extra": "mean: 1.3033 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[serial-calcjob-loop]",
            "value": 0.1626074846423067,
            "unit": "iter/sec",
            "range": "stddev: 0.10925",
            "group": "engine",
            "extra": "mean: 6.1498 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_engine.py::test_workchain_daemon[threaded-calcjob-loop]",
            "value": 0.19081452236464183,
            "unit": "iter/sec",
            "range": "stddev: 0.10986",
            "group": "engine",
            "extra": "mean: 5.2407 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[no-objects]",
            "value": 2.768685425096151,
            "unit": "iter/sec",
            "range": "stddev: 0.052573",
            "group": "import-export",
            "extra": "mean: 361.18 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_export[with-objects]",
            "value": 2.48346086720649,
            "unit": "iter/sec",
            "range": "stddev: 0.048739",
            "group": "import-export",
            "extra": "mean: 402.66 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[no-objects]",
            "value": 1.593714590039935,
            "unit": "iter/sec",
            "range": "stddev: 0.043957",
            "group": "import-export",
            "extra": "mean: 627.46 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_importexport.py::test_import[with-objects]",
            "value": 1.4447797493567822,
            "unit": "iter/sec",
            "range": "stddev: 0.057530",
            "group": "import-export",
            "extra": "mean: 692.15 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_backend",
            "value": 1130.2757881661962,
            "unit": "iter/sec",
            "range": "stddev: 0.000067784",
            "group": "node",
            "extra": "mean: 884.74 usec\nrounds: 197"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store",
            "value": 213.4167874447888,
            "unit": "iter/sec",
            "range": "stddev: 0.0028211",
            "group": "node",
            "extra": "mean: 4.6857 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_store_with_object",
            "value": 217.98800364114572,
            "unit": "iter/sec",
            "range": "stddev: 0.00014032",
            "group": "node",
            "extra": "mean: 4.5874 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_backend",
            "value": 244.49684364965955,
            "unit": "iter/sec",
            "range": "stddev: 0.000094011",
            "group": "node",
            "extra": "mean: 4.0900 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete",
            "value": 45.827170510710154,
            "unit": "iter/sec",
            "range": "stddev: 0.0014468",
            "group": "node",
            "extra": "mean: 21.821 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmark/test_nodes.py::test_delete_with_object",
            "value": 44.61570388604439,
            "unit": "iter/sec",
            "range": "stddev: 0.0016850",
            "group": "node",
            "extra": "mean: 22.414 msec\nrounds: 100"
          }
        ]
      }
    ]
  }
}