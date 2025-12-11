import { useNavigate, useSearch } from "@tanstack/react-router";
import { useMemo } from "react";

interface Props<T> {
  data: T[];
  defaultRowsPerPage?: number;
}

export default function usePagination<T>({
  data,
  defaultRowsPerPage = 5,
}: Props<T>) {
  const navigate = useNavigate();
  const search: any = useSearch({ strict: false });

  const page = Number(search.page) || 1;
  const rowsPerPage = Number(search.rowsPerPage) || defaultRowsPerPage;

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return data.slice(start, end);
  }, [page, data, rowsPerPage]);

  const pages = Math.ceil(data.length / rowsPerPage);

  function setPage(newPage: number) {
    navigate({
      search: (prev: any) => ({ ...prev, page: newPage }),
      replace: true,
    } as any);
  }

  function handleSetRowsPerPage(newRowsPerPage: number) {
    navigate({
      search: (prev: any) => ({ ...prev, rowsPerPage: newRowsPerPage, page: 1 }),
      replace: true,
    } as any);
  }

  return {
    items,

    page,
    setPage,

    rowsPerPage,
    setRowsPerPage: handleSetRowsPerPage,

    pages,
  };
}
