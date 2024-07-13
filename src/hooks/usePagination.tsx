import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface Props<T> {
  data: T[];
  defaultRowsPerPage?: number;
}

export default function usePagination<T>({
  data,
  defaultRowsPerPage = 5,
}: Props<T>) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [rowsPerPage, setRowsPerPage] = useState(
    Number(searchParams.get("rowsPerPage")) || defaultRowsPerPage
  );
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);

  useEffect(() => {
    const currentSearchParams = new URLSearchParams(searchParams);
    currentSearchParams.set("page", page.toString());
    currentSearchParams.set("rowsPerPage", rowsPerPage.toString());
    setSearchParams(currentSearchParams);
  }, [page, rowsPerPage, setSearchParams, searchParams]);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return data.slice(start, end);
  }, [page, data, rowsPerPage]);

  const pages = Math.ceil(data.length / rowsPerPage);

  return {
    items,

    page,
    setPage,

    rowsPerPage,
    setRowsPerPage,

    pages,
  };
}
