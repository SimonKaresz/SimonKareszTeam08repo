--3.feladat

SELECT vnev 
FROM varos 
WHERE vnev LIKE '%vásár%';

--4.feladat

SELECT vnev,nepesseg,terulet 
FROM varos 
WHERE terulet > 400 
ORDER BY nepesseg DESC;

--5.feladat

SELECT vnev,nepesseg 
FROM varos 
INNER JOIN megye 
ON varos.megyeid = megye.id 
WHERE nepesseg> 15000 AND mnev = 'Fejér';

--6.feladat

SELECT vtip AS 'Város típusa', COUNT(vnev) AS 'Városok száma',SUM(nepesseg)
    AS 'Népesség' 
FROM varostipus 
INNER JOIN varos 
ON varostipus.id = varos.vtipid 
WHERE varostipus.vtip NOT IN('Főváros') 
GROUP BY vtip;

--7.feladat

SELECT megye.mnev,COUNT(varos.vnev) AS db
FROM megye
INNER JOIN varos
ON megye.id = varos.megyeid
WHERE varos.kisterseg <> varos.jaras
GROUP BY megye.mnev
ORDER BY db DESC;